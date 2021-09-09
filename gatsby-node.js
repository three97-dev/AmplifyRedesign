require("dotenv").config();
const path = require("path");

const blogPost = path.resolve("./src/templates/blog-post.js");
const blog = path.resolve("./src/templates/blog.js");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const configData = await graphql(`
    {
      contentfulConfigJson {
        id
        config {
          blog {
            pagination
          }
        }
      }
    }
  `);
  if (configData.errors) {
    reporter.panicOnBuild(`There was an error loading your Contentful config json`, configData.errors);
    return;
  }
  const config = configData.data.contentfulConfigJson.config;

  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          id
          slug
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your Contentful posts`, result.errors);
    return;
  }
  const posts = result.data.allContentfulBlogPost.nodes;

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    for (const post of posts) {
      const postURL = `/blog/${post.slug}/`;
      console.log(`Generating blog post page: ${postURL}`);
      createPage({
        path: postURL,
        component: blogPost,
        context: {
          id: post.id,
          slug: post.slug,
        },
      });
    }

    const numOfBlogPaginationPages = Math.ceil(posts.length / config.blog.pagination);
    for (let i = 0; i < numOfBlogPaginationPages; i += 1) {
      // src/component/BlogPaginator duplicates this URL building logic for UI
      const paginationUrl = i === 0 ? `/blog/` : `/blog/page/${i + 1}`;

      console.log(`Generating blog pagination page: ${paginationUrl}`);
      createPage({
        path: paginationUrl,
        component: blog,
        context: {
          currentPage: i + 1,
          totalPages: numOfBlogPaginationPages,
          limit: config.blog.pagination,
          skip: i * config.blog.pagination,
        },
      });
    }
  }
};
