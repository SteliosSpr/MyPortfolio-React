import "../../styles/contact.css";
import { useRef, useState, SyntheticEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const Contact = () => {
	const form = useRef<HTMLFormElement>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const sendEmail = (e: SyntheticEvent) => {
		e.preventDefault();

		if (form.current) {
			const nameInput = form.current.elements.namedItem(
				"user_name"
			) as HTMLInputElement;
			const emailInput = form.current.elements.namedItem(
				"user_email"
			) as HTMLInputElement;
			const messageInput = form.current.elements.namedItem(
				"message"
			) as HTMLTextAreaElement;

			const name = nameInput.value.trim();
			const email = emailInput.value.trim();
			const message = messageInput.value.trim();

			if (!name || !email || !message) {
				alert("Please fill in all the fields before submitting the form.");
				return;
			}

			setIsSubmitting(true);

			emailjs
				.sendForm(
					"service_mjst92o",
					"template_twqig8p",
					form.current,
					"BzzetfgaB-adriK6k"
				)
				.then(
					(result: EmailJSResponseStatus) => {
						console.log(result.text);
						alert("Form submitted successfully!");
						form.current?.reset();
						setIsSubmitting(false);
					},
					(error: EmailJSResponseStatus) => {
						console.log(error.text);
						alert(
							"An error occurred while submitting the form. Please try again."
						);
						setIsSubmitting(false);
					}
				);
		}
	};

	return (
		<div className="contact-container">
			<div className="contact-header-container">
				<h1>CONTACT</h1>
				<hr />
				<p>
					If you want to contact me, please fill in the form below and i will
					reach out as soon as possible.
				</p>
			</div>
			<div className="contact-form-container">
				<form ref={form} onSubmit={sendEmail}>
					<div className="input-container">
						<label htmlFor="user_name">Name</label>
						<br />
						<input
							type="text"
							name="user_name"
							id="user_name"
							placeholder="Enter your Name"
						/>
					</div>
					<div className="input-container">
						<label htmlFor="user_email">Email</label>
						<br />
						<input
							type="email"
							name="user_email"
							id="user_email"
							placeholder="Enter your Email"
						/>
					</div>
					<div className="input-container">
						<label htmlFor="message">Message</label>
						<br />
						<textarea
							rows={10}
							cols={30}
							name="message"
							id="message"
							placeholder="Enter your Message"
						></textarea>
					</div>
					<div className="input-container">
						<button type="submit" disabled={isSubmitting}>
							{isSubmitting ? "Submitting..." : "Submit"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Contact;
