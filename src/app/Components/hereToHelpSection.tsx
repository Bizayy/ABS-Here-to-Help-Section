import DescriptionSection from "./descriptionSection"
import QuestionsSection from "./questionsSection"
function HereToHelpSection() {
    return (
        <div className="w-screen min-h-screen p-4 bg-[#f5f6f7]">

            <div className="flex flex-col lg:flex-row items-start gap-8 max-w-[550px] md:max-w-[700px] lg:max-w-[970px] xl:max-w-[1150px] mx-auto">
                {/* Description Section */}
                <DescriptionSection />


                {/* Questions Section */}
                <QuestionsSection />
            </div>
        </div>
    )
}

export default HereToHelpSection
