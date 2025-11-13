import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contacts() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputs = [
    { name: "fullName", label: "FULL NAME", type: "text" },
    { name: "email", label: "EMAIL", type: "email" },
    { name: "phone", label: "PHONE", type: "tel" },
    { name: "message", label: "MESSAGE", type: "textarea" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_MyFolio", // 🔧 Remplace par ton Service ID EmailJS
        "template_p5v3rau", // 🔧 Remplace par ton Template ID EmailJS
        formData,
        "MGLsIwvNpjiO93QdZ" // 🔧 Remplace par ta clé publique EmailJS
      )
      .then(
        () => {
          alert("Message envoyé avec succès !");
          setFormData({ fullName: "", email: "", phone: "", message: "" });
        },
        (error: { text: string }) => {
          alert("Une erreur est survenue : " + error.text);
        }
      );
  };
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-start p-10 py-10 min-h-screen bg-white text-black ">
        {/* --- Texte à gauche --- */}
        <div className=" text-[20vw] md:text-[8vw] font-extrabold leading-tight py-3 md:py-20 md:w-1/2">
          <p>LET’S</p>
          <p>GET IN</p>
          <p>TOUCH</p>
        </div>

        {/* --- Formulaire à droite --- */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full flex flex-col py-1 md:py-5 gap-6 mt-10 md:mt-0"
        >
          <h2 className="text-center text-2xl md:text-4xl italic underline mb-12">
            Contact
          </h2>
          {inputs.map((input) => (
            <div key={input.name}>
              <label className="block font-medium mb-1">{input.label}</label>
              {input.type === "textarea" ? (
                <textarea
                  name={input.name}
                  value={formData[input.name as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full border-b border-gray-400 focus:outline-none p-2"
                  rows={3}
                />
              ) : (
                <input
                  type={input.type}
                  name={input.name}
                  value={formData[input.name as keyof typeof formData]}
                  onChange={handleChange}
                  className="w-full border-b border-gray-400 focus:outline-none p-2"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="mt-4 bg-gray-100 shadow-md px-6 py-2 cursor-pointer rounded-full hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </form>
      </div>
      <footer
       className="flex gap-6 md:gap-60  bg-white text-black px-10 pb-5 justify-between">
        <p className="text-sm font-normal mt-2">+237 694 002 527</p>
        <p className="text-sm font-normal mt-2">&copy;MyFolio2025</p>
      </footer>
    </section>
  );
}
