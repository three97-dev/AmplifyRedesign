import StoryblokClient from "storyblok-js-client";

import { resolveRelationsList } from "../../storyblok.config";

class StoryblokService {
  constructor(accessToken) {
    this.devMode = false;
    this.accessToken = accessToken;
    this.client = new StoryblokClient({
      accessToken,
      cache: {
        clear: "auto",
        type: "memory",
      },
    });
    this.query = "";
  }

  getCacheVersion() {
    return this.client.cacheVersion;
  }

  get(slug, params) {
    params = params || {};
    params.resolve_links = "url";

    if (this.getQuery("_storyblok") || this.devMode || (typeof window !== "undefined" && window.storyblok)) {
      params.version = "draft";
    }

    if (typeof window !== "undefined" && typeof window.StoryblokCacheVersion !== "undefined") {
      params.cv = window.StoryblokCacheVersion;
    }

    if (resolveRelationsList.length > 0) {
      params.resolve_relations = resolveRelationsList.join(",");
    }

    return this.client.get(slug, params);
  }

  initEditor(reactComponent) {
    if (window.storyblok) {
      window.storyblok.init({ accessToken: this.accessToken });
      window.storyblok.on(["change", "published"], () => window.location.reload(true));

      // this will alter the state and replaces the current story with a current raw story object (no resolved relations or links)
      window.storyblok.on("input", event => {
        if (event.story && event.story.content._uid === reactComponent.state.story.content._uid) {
          event.story.content = window.storyblok.addComments(event.story.content, event.story.id);
          window.storyblok.resolveRelations(event.story, resolveRelationsList, () => {
            reactComponent.setState({
              story: event.story,
            });
          });
        }
      });
    }
  }

  setQuery(query) {
    this.query = query;
  }

  getQuery(param) {
    return this.query.includes(param);
  }
}

export default StoryblokService;
