import React, { useState } from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { useFormik } from "formik";
import * as Yup from "yup";

import Text from "../basic/text/Text";
import Input from "../basic/input/Input";
import Button from "../basic/button/Button";

import "./HeroContactForm.css";

const BACKGROUNDS = {
  MobileBg: ({ alt, className }) => (
    <StaticImage
      src="../../assets/pages/contact/hero-contact-bg-mobile.png"
      placeholder="blurred"
      layout="fixed"
      quality={100}
      alt={alt}
      className={className}
    />
  ),
  TabletBg: ({ alt, className }) => (
    <StaticImage
      src="../../assets/pages/contact/hero-contact-bg-tablet.png"
      placeholder="blurred"
      layout="fixed"
      quality={100}
      alt={alt}
      className={className}
    />
  ),
  WebBg: ({ alt, className }) => (
    <StaticImage
      src="../../assets/pages/contact/hero-contact-bg-web.png"
      placeholder="blurred"
      layout="fixed"
      quality={100}
      alt={alt}
      className={className}
    />
  ),
  WebHdBg: ({ alt, className }) => (
    <StaticImage
      src="../../assets/pages/contact/hero-contact-bg-webhd.png"
      placeholder="blurred"
      layout="fixed"
      quality={100}
      alt={alt}
      className={className}
    />
  ),
};

const HeroContactForm = ({
  heroTitle,
  heroSubtitle,
  firstNameInputPlaceholder,
  lastNameInputPlaceholder,
  businessInputPlaceholder,
  phoneNumberInputPlaceholder,
  emailAddressInputPlaceholder,
  requiredMessage,
  buttonLabel,
  className,
  storybookBackgroundsMocks,
  ...otherProps
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      business: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(50, "First Name should be shorter then 50 letters")
        .required("First Name is required"),
      lastname: Yup.string().max(50, "Last Name should be shorter then 50 letters").required("Last Name is required"),
      business: Yup.string().max(50, "Business should be shorter then 50 letters"),
      phone: Yup.string().matches(phoneRegExp, "Phone Number should match XXX-XXX-XXXX"),
      email: Yup.string().email("Valid email is required").required("Email Address is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      console.log("Form submitted");
      setSubmitting(false);
      setIsSubmitted(true);
    },
  });

  const { MobileBg, TabletBg, WebBg, WebHdBg } = storybookBackgroundsMocks || BACKGROUNDS;

  return (
    <div
      className={`grid justify-items-center w-full relative overflow-hidden h-1375px sm+:h-1112px md+:h-858px lg+:h-1198px ${className}`}
      {...otherProps}
    >
      <div className="absolute -z-10 w-max max-w-none sm+:hidden">
        <MobileBg alt="hero background" />
      </div>
      <div className="absolute -z-10 w-max max-w-none hidden sm+:grid md+:hidden">
        <TabletBg alt="hero background" />
      </div>
      <div className="absolute -z-10 w-max max-w-none hidden md+:grid lg+:hidden">
        <WebBg alt="hero background" />
      </div>
      <div className="absolute -z-10 w-max max-w-none hidden lg+:grid">
        <WebHdBg alt="hero background" />
      </div>

      <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.75.2012.0"></script>
      <div
        className="d365-mkt-config"
        style={{ display: "none" }}
        data-website-id="rRvIWTB_IB990UqH1dvyLDcy5EnjG29dLkvxzuyUkdw"
        data-hostname="7ac0a376c0174a89b912752aded4dd64.svc.dynamics.com"
      ></div>

      <form
        id="contact-form"
        className="grid hero-contact-grid-mobile md:hero-contact-grid-tablet lg:hero-contact-web-grid xl:hero-contact-webhd-grid mx-36px mt-591px md:mt-481px lg:mt-262px xl:mt-424px"
        onSubmit={formik.handleSubmit}
      >
        <div className="hero-contact-title-area">
          <Text typography="h1" className="mb-20px lg:text-white">
            {heroTitle}
          </Text>
        </div>
        <div className="hero-contact-subtitle-area">
          <Text typography="h3" className="mb-50px">
            {heroSubtitle}
          </Text>
        </div>
        <div className="hero-contact-first-name-area">
          <Input
            id="firstname"
            name="firstname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.errors.firstname && formik.touched.firstname}
            title={formik.errors.firstname}
            value={formik.values.firstname}
            disabled={isSubmitted}
            placeholder={firstNameInputPlaceholder}
            className="mb-16px"
          />
        </div>
        <div className="hero-contact-last-name-area">
          <Input
            id="lastname"
            name="lastname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.errors.lastname && formik.touched.lastname}
            title={formik.errors.lastname}
            value={formik.values.lastname}
            disabled={isSubmitted}
            placeholder={lastNameInputPlaceholder}
            className="mb-16px"
          />
        </div>

        <div className="hero-contact-business-area">
          <Input
            id="business"
            name="business"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.errors.business && formik.touched.business}
            title={formik.errors.business}
            value={formik.values.business}
            disabled={isSubmitted}
            placeholder={businessInputPlaceholder}
            className="mb-16px"
          />
        </div>
        <div className="hero-contact-phone-number-area">
          <Input
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.errors.phone && formik.touched.phone}
            title={formik.errors.phone}
            value={formik.values.phone}
            disabled={isSubmitted}
            placeholder={phoneNumberInputPlaceholder}
            className="mb-16px"
          />
        </div>

        <div className="hero-contact-email-area">
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.errors.email && formik.touched.email}
            title={formik.errors.email}
            value={formik.values.email}
            disabled={isSubmitted}
            placeholder={emailAddressInputPlaceholder}
            className="mb-16px"
          />
        </div>
        <div className="hero-contact-required-area flex items-center justify-center md:justify-end tracking-wide text-body text-coral-red border-dashed border-2 border-input-color md:pr-3px mb-15px md:mb-0px xl:-mr-125px ">
          {requiredMessage}
        </div>
        <div className="hero-contact-submit-area xl:text-right">
          <Button
            type="submit"
            form="contact-form"
            disabled={isSubmitted || !formik.dirty}
            label={isSubmitted ? "Submitted" : buttonLabel}
            className="w-full xl:w-270px"
          />
        </div>
      </form>
    </div>
  );
};

HeroContactForm.propTypes = {
  heroTitle: PropTypes.string,
  heroSubtitle: PropTypes.string,
  firstNameInputPlaceholder: PropTypes.string,
  lastNameInputPlaceholder: PropTypes.string,
  businessInputPlaceholder: PropTypes.string,
  phoneNumberInputPlaceholder: PropTypes.string,
  emailAddressInputPlaceholder: PropTypes.string,
  requiredMessage: PropTypes.string,
  buttonLabel: PropTypes.string,
  className: PropTypes.string,
};

HeroContactForm.defaultProps = {
  heroTitle: "some title msg",
  heroSubtitle: "some subtitle msg",
  firstNameInputPlaceholder: "some first name msg",
  lastNameInputPlaceholder: "some last name msg",
  businessInputPlaceholder: "some business msg",
  phoneNumberInputPlaceholder: "some phone msg",
  emailAddressInputPlaceholder: "some email msg",
  requiredMessage: "some required msg",
  buttonLabel: "some button msg",
  className: "",
};

export default HeroContactForm;