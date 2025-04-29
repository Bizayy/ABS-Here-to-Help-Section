import { useState } from "react"
function QuestionsSection() {
    const [states, setStates] = useState<{ [key: number]: boolean }>({});
    const handleClick = (ind: number) => {
        setStates(prev => ({
            ...prev,
            [ind]: !prev[ind],
        }))
    }
    return (
        <div className="w-full lg:w-1/2">
            <div className="i">
                <div className="w-full py-6 border-t border-b border-slate-200">
                    <div className="flex items-center justify-between gap-3 text-[#0a165e] cursor-pointer" onClick={() => handleClick(1)}>
                        <h2 className="text-xl font-semibold">Q1. Do you have any client testimonials?</h2>
                        <div className="text-3xl font-semibold" style={{ transition: 'transform 0.5s ease', transform: states[1] ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</div>
                    </div>
                    {/* Sliding Answer */}
                    <p className="w-[80%] pb-3 text-[#5a5b6f]"
                        style={{
                            maxHeight: states[1] ? '500px' : '0px',
                            paddingTop: states[1] ? '12px' : '0px',
                            paddingBottom: states[1] ? '12px' : '0px',
                            overflow: 'hidden',
                            transition: 'max-height 1s ease, padding 1s ease',
                        }}>
                        Absolutely! Consider what our clients have to say about our collaboration. Go to homepage and have a look at the bottom of the page.
                    </p>
                </div>
                <div className="py-6 border-b border-slate-200">
                    <div className="flex items-center justify-between gap-3 text-[#0a165e] cursor-pointer" onClick={() => handleClick(2)}>
                        <h2 className="text-xl font-semibold">Q2. How can i trust that you'll allocate the time you promise to my project?</h2>
                        <div className="text-3xl font-semibold" style={{ transition: 'transform 0.5s ease', transform: states[2] ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</div>
                    </div>
                    {/* Sliding Answer */}
                    <p className="w-[80%] pb-3 text-[#5a5b6f]" style={{
                        maxHeight: states[2] ? '500px' : '0px',
                        paddingTop: states[2] ? '12px' : '0px',
                        paddingBottom: states[2] ? '12px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 1s ease, padding 1s ease',
                    }}>
                        We carefully track and manage our team' time for each task, down to the minute. To achieve this, we rely on Harvest and Redmine to monitor the duration spent on your project.</p>
                </div>
                <div className="py-6 border-b border-slate-200">
                    <div className="flex items-center justify-between gap-3 text-[#0a165e] cursor-pointer" onClick={() => handleClick(3)}>
                        <h2 className="text-xl font-semibold">Q3. What is your price?</h2>
                        <div className="text-3xl font-semibold" style={{ transition: 'transform 0.5s ease', transform: states[3] ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</div>
                    </div>
                    {/* Sliding Answer */}
                    <p className="w-[80%] pb-3 text-[#5a5b6f]" style={{
                        maxHeight: states[3] ? '500px' : '0px',
                        paddingTop: states[3] ? '12px' : '0px',
                        paddingBottom: states[3] ? '12px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 1.2s ease, padding 1.2s ease',
                    }}>
                        Our pricing considerations encompass a range of factors, such as the project's scope, duration, and technical complexities. We acknowledge that clarity may seem elusive in this domain; however, transparency remains our guiding principle. Each software endeavor bears its own distinct characteristics, particularly when fueled by pioneering ideas. Our aim is not to offer an exaggerated estimate but rather to deliver unparalleled quality within your financial parameters. For an estimated quote, simply visit our homepage and click on contact located at the top left corner of our menu.</p>
                </div>
                <div className="py-6 border-b border-slate-200">
                    <div className="flex items-center justify-between gap-3 text-[#0a165e] cursor-pointer" onClick={() => handleClick(4)}>
                        <h2 className="text-xl font-semibold">Q4. What are the payment methods?</h2>
                        <div className="text-3xl font-semibold" style={{ transition: 'transform 0.5s ease', transform: states[4] ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</div>
                    </div>
                    {/* Sliding Answer */}
                    <p className="w-[80%] pb-3 text-[#5a5b6f]" style={{
                        maxHeight: states[4] ? '500px' : '0px',
                        paddingTop: states[4] ? '12px' : '0px',
                        paddingBottom: states[4] ? '12px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 1s ease, padding 1s ease',
                    }}>
                        We offer different payment options like bank transfer, khalti and cash .</p>
                </div>
            </div>
        </div>
    )
}

export default QuestionsSection
