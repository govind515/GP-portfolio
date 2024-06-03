import React, { useRef, useState } from "react"; // Importing React, useRef, and useState hooks.
import { motion } from "framer-motion"; // Importing motion for animations from framer-motion.
import emailjs from "@emailjs/browser"; // Importing emailjs for sending emails.

import { styles } from "../styles"; // Importing custom styles.
import { EarthCanvas } from "./canvas"; // Importing EarthCanvas component for 3D Earth rendering.
import { SectionWrapper } from "../hoc"; // Importing higher-order component for section wrapping.
import { slideIn } from "../utils/motion"; // Importing custom slideIn animation variant.

const Contact = () => {
  const formRef = useRef(); // Creating a reference for the form.
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  }); // Initializing state for form fields.

  const [loading, setLoading] = useState(false); // Initializing state for loading status.

  const handleChange = (e) => {
    const { target } = e; // Extracting target element from the event.
    const { name, value } = target; // Extracting name and value from the target element.

    setForm({
      ...form,
      [name]: value, // Updating the corresponding form field with the new value.
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior.
    setLoading(true); // Setting loading status to true.

    emailjs
      .send(
        "service_80iamxn", // Email service ID.
        "template_b0ugtbi", // Email template ID.
        {
          from_name: form.name, // Sender's name from form state.
          from_email: form.email, // Sender's email from form state.
          message: form.message, // Message from form state.
        },
        "UUkEOj9VRFuB-Uv_P" // User ID for emailjs authentication.
      )
      .then(
        () => {
          setLoading(false); // Setting loading status to false.
          alert("Thank you. I will get back to you as soon as possible."); // Displaying success message.

          setForm({
            name: "",
            email: "",
            message: "",
          }); // Resetting form fields.
        },
        (error) => {
          setLoading(false); // Setting loading status to false.
          console.error(error); // Logging error to the console.

          alert("Something went wrong. Please try again."); // Displaying error message.
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Container for the contact form and 3D Earth, with responsive styling */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)} // Applying slideIn animation variant.
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        // Styling for the contact form container.
      >
        <p className={styles.sectionSubText}>Email me 🚀</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef} // Attaching formRef to the form element.
          onSubmit={handleSubmit} // Setting handleSubmit as the form submission handler.
          className="mt-12 flex flex-col gap-8"
          // Styling for the form with margin and gap between elements.
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              // Styling for the input field with background, padding, and font styles.
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              // Styling for the email input field.
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              // Styling for the textarea field.
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            // Styling for the submit button.
          >
            {loading ? "Sending..." : "Send"}
            {/* Displaying "Sending..." when loading is true, otherwise "Send" */}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} // Applying slideIn animation variant.
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        // Styling for the 3D Earth container with responsive heights.
      >
        <EarthCanvas /> {/* Rendering the 3D EarthCanvas component */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
// Wrapping the Contact component with SectionWrapper and exporting it.
