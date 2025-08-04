import ReCct from 'react'

function Contact() {
  return (
    <>
       <section class="py-16 px-6 bg-white">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 class="text-3xl font-bold mb-4">Get in touch</h2>
                <p class="text-lg font-semibold mb-4 text-gray-700">
                    Hey! We are looking forward to starting a project with you!
                </p>
                <div class="border-l-4 border-orange-500 pl-4 text-gray-700">
                    <p class="mb-2">
                        Have a project in mind or looking for an internship opportunity? We’d love to hear from you! Connect with us to discuss your requirements and take the next step toward <span class="font-bold">innovative software solutions</span>.
                    </p>
                </div>
            </div>

            <form class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" class="border border-gray-400 px-4 py-2 w-full" />
                    <input type="text" placeholder="Last Name" class="border border-gray-400 px-4 py-2 w-full" />
                </div>
                <input type="email" placeholder="Enter Email" class="border border-gray-400 px-4 py-2 w-full" />
                <textarea placeholder="Message" rows="4" class="border border-gray-400 px-4 py-2 w-full"></textarea>
                <button type="submit" class="bg-black text-white px-6 py-2">Submit</button>
            </form>
        </div>
        </section>

    </>
  )
}
export default Contact