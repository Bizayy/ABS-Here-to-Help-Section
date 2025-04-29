import Link from "next/link"
function DescriptionSection() {
    return (
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-start gap-5">
                <h1 className="text-4xl xl:text-5xl font-semibold text-[#0a165e]">We're here to help!</h1>
                <p className="text-[#5a5b6f] w-full lg:w-4/5">If you couldn't find the answer in our FAQ section, feel free to reach out to us. We're happy to assist with any inquiries you may have. Simply fill out the form, and our team will get back to you as soon as possible!</p>
                <Link href='' className="rounded-md cursor-pointer text-white bg-[#3d68a4] p-4 animate-btnSlideUp font-semibold">Got any questions?</Link>
            </div>
        </div>
    )
}

export default DescriptionSection
