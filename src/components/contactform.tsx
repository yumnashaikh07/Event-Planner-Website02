// "use client"
// import React ,{useState , useEffect} from "react";
// import { Button } from "./ui/button";


//     const [formData , setformData]= useState({
//         firstname:'',
//         secondname:"",
//         email:'',
//         phone:'',
//         venueaddress:'',
//         message:''
//     })
    
//     const [submitted , setSubmitted] = useState(false)
//        useEffect(()=>{
//         emailjs.init("") //Emailjs Public key
//        },[])
//         // YOU CAN USE API HERE 
    
//     async function handleSubmite =(e :React.FormEvent<HTMLTFormElement>){
//        e.preventDefault()
//        const templateParams={
//         firstname :formData.firstname,
//         secondname :formData.secondname,
//         email : formData.email,
//         phone:formData.phone,
//         venueaddress :formData.venueaddress,
//         message: formData.message
//        }
//        try{
//         await emailjs.send (
//             ""
//             ""
//             templateParams
//         )
//         setSubmitted(true)}
//         catch(error)
//         {
//             console.error("Something is Missing:", error)
//         }
//     }
//     setformData({
//         firstname:"",
//         secondname:"",
//         email:"",
//         phone:"",
//         venueaddress:"",
//         message:""
//     })

//   function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
//     setformData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   }
// export default function ContactForm(){
 
//     return(
//         <main className="bg-[#d7d5d5] w-[700px] h-[500px] p-10 text-black  font">
//             <h2 className="mb-3 font-medium text-3xl text-[#6a6044]  text-center">Please Fill out this Form!</h2>
//             <h2 className="mb-10 font-medium text-xl text-[#6a6044]  text-center">We'll get back to you shortly</h2> 
//                 <form onSubmit={handleSubmite} className="grid gap-4">
// <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    
//                     <input 
//                     type="text"
//                     name="firstname"
//                     placeholder="Your First Name"
//                     value={formData.firstname}
//                     onChange={handleChange}
//                     required
//                     className=" px-4 py-2 focus:outline-none "
//                    />

//                     <input 
//                     type="text"
//                     name="secondname"
//                     placeholder="Your Second Name"
//                     value={formData.secondname}
//                     onChange={handleChange}
//                     required
//                     className="px-4 py-2 focus:outline-none "
//                    />
// </div>
// <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
//                     <input 
//                     type="email"
//                     name="email"
//                     placeholder="Your Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="px-4 py-2 focus:outline-none "
//                    />

//                     <input 
//                     type="text"
//                     name="phone"
//                     placeholder="Your Phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="px-4 py-2 focus:outline-none "
//                    />

// </div>
// <div  className="grid grid-cols-1 mb-5  gap-4">

//                     <textarea 
//                     name="Message / Instruction"
//                     placeholder="Your Message Here"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={3}className="px-4 py-2 focus:outline-none "
//                     />
// </div>
//                  <Button 
//                  type="submit"
//                  className=" bg-[#6a6044] text-white hover:bg-white hover:text-[#6a6044] font text-xl">Booking Confirmed
//                  </Button>
//                 </form>     
//         </main>
//     )
// }









// "use client";
// import React, { useState, useEffect } from "react";
// import { Button } from "./ui/button";
// import emailjs from "emailjs-com";


//   const [formData, setformData] = useState({
//     firstname: "",
//     secondname: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(null);

  
//   useEffect(() => {
//     emailjs.init("Cp1U6sjzrRcIQYZuJ"); // Replace with your actual public key
//   }, []);

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const templateParams = {
//       firstname: formData.firstname,
//       secondname: formData.secondname,
//       email: formData.email,
//       phone: formData.phone,
//       message: formData.message,
//     };

//     try {
//       await emailjs.send(
//         "service_2rfuqvo",  
//         "template_w3qffps",  // service_3gls27k
//         templateParams
//       );
//       setSubmitted(true);
//     } catch (error) {
//       console.error("Failed to send message:", error);
//     }

//     setformData({
//         firstname: "",
//         secondname: "",
//         email: "",
//         phone: "",
//         message: "",
//     });
//   }

//   function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
//     setformData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   }
  
// export default function ContactForm(){
//     return(
// <main className="bg-[#d7d5d5] w-[700px] h-[500px] p-10 text-black  font">
//            <h2 className="mb-3 font-medium text-3xl text-[#6a6044]  text-center">Please Fill out this Form!</h2>
// //             <h2 className="mb-10 font-medium text-xl text-[#6a6044]  text-center">We'll get back to you shortly</h2> 
// //                 <form onSubmit={handleSubmit} className="grid gap-4">
// // <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    
//                    <input 
//                     type="text"
//                     name="firstname"
//                     placeholder="Your First Name"
//                     value={formData.firstname}
//                     onChange={handleChange}
//                     required
//                     className=" px-4 py-2 focus:outline-none "
//                    />

//                     <input 
//                     type="text"
//                     name="secondname"
//                     placeholder="Your Second Name"
//                     value={formData.secondname}
//                     onChange={handleChange}
//                     required
//                     className="px-4 py-2 focus:outline-none "
//                    />
// </div>
// <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
//                     <input 
//                     type="email"
//                     name="email"
//                     placeholder="Your Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="px-4 py-2 focus:outline-none "
//                    />

//                     <input 
//                     type="text"
//                     name="phone"
//                     placeholder="Your Phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="px-4 py-2 focus:outline-none "
//                    />

// </div>
// <div  className="grid grid-cols-1 mb-5  gap-4">

//                     <textarea 
//                     name="Message / Instruction"
//                     placeholder="Your Message Here"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={3}className="px-4 py-2 focus:outline-none "
//                     />
// </div>
//                  <Button 
//                  type="submit"
//                  className=" bg-[#6a6044] text-white hover:bg-white hover:text-[#6a6044] font text-xl">Booking Confirmed
//                  </Button>
//                 </form>     
//         </main>
//     )
// }


















"use client";

import React, { useState ,useEffect} from "react";
import { Button } from "./ui/button";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    emailjs.init("Cp1U6sjzrRcIQYZuJ"); // Replace with your actual public key
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const templateParams = {
      firstname: formData.firstname,
      secondname: formData.secondname,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_2rfuqvo", // Your Service ID
        "template_w3qffps", // Your Template ID
        templateParams
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send message:", error);
      }
       setFormData({
        firstname: "",
        secondname: "",
        email: "",
        phone: "",
        message: "",
      });
   
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <main className="bg-[#d7d5d5] md:w-[500px] mx-auto  md:h-[500px] md:p-10 p-5  text-black font">
      <h2 className="mb-3 font-medium text-2xl md:text-3xl mt-5 md:mt-0 text-[#6a6044] text-center">
        Please Fill out this Form!
      </h2>
      {submitted && <p className="text-[#c0a249]  mt-4">Message sent successfully!</p>}
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <input
            type="text"
            name="firstname"
            placeholder="Your First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
            className="px-4 py-2 focus:outline-none"
          />
          <input
            type="text"
            name="secondname"
            placeholder="Your Second Name"
            value={formData.secondname}
            onChange={handleChange}
            required
            className="px-4 py-2 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-2 focus:outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="px-4 py-2 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 mb-5 gap-4">
          <textarea
            name="message"
            placeholder="Your Message Here"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
            className="px-4 py-2 focus:outline-none"
          />
        </div>

        <Button
          type="submit"
          className="bg-[#6a6044] text-white hover:bg-white hover:text-[#6a6044] font text-xl"
        >
          Submit Message
        </Button>
      </form>
 </main>
  );
};

export default ContactForm;

