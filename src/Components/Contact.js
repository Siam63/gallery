import React from 'react';
import emailjs, { send } from '@emailjs/browser';

function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7t689h6', 'template_h9a2g4h', e.target, 'gS2iWeUH97qfdywp8');
        alert('Email Submitted!');
    }

    return (
        <div className="w-full h-screen bg-[#0a192f]">
            <section>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-300">Contact Me</h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got any questions you might want to ask me? Get in touch!</p>
                    <form onSubmit={sendEmail} action="#" class="space-y-8">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-400 ">Your Email:</label>
                            <input type="text" name="email_from" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your Message:</label>
                            <textarea name="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" class="hover:bg-slate-100 transition-all border-2 py-3 px-5 text-m font-medium text-center text-gray-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
