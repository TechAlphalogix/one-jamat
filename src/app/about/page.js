export default function About() {
    return (
        <>
            <header className='bg-[url("../../public/bg-big.jpg")] text-white '>
                <div className='container w-[95%] md:h-[35vh] justify-center items-center flex flex-col-reverse mx-auto lg:flex-row px-6 pb-8 pt-8 sm:pt-10 lg:px-8 lg:pt-[70px]'>
                    <div className='hero-top flex flex-col '>
                        <div>
                            <h1 className='font-semibold text-5xl leading-[50px] md:text-[72px] md:leading-[84.46px] text-center md:mx-auto md:flex '>About Us</h1>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="container mx-auto lg:flex-row px-6 pb-8 pt-8 sm:pt-10 lg:px-8 lg:pt-[70px]">
                {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index}>
                        <h2 className="font-semibold text-[26px]  leading-[23px]">
                            Our Vision: Unveiling a Decade of Excellence
                        </h2>
                        <p>
                            Embarking on a journey that spans over a decade, our platform is a testament to the resilience, creativity, and unwavering commitment of the software development companies that call Gilgit Baltistan home. These enterprises have been at the forefront of technological advancements, carving a niche for themselves in diverse domains such as software development, digital marketing, graphic design, bookkeeping, and UX design.
                        </p>
                    </div>
                ))}

                {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index}>
                        <h2>
                            What Sets Us Apart:
                        </h2>
                        <p>
                            Legacy of Innovation: Our featured companies boast a rich legacy of innovation, contributing significantly to the ever-evolving field of software development. With a track record that spans a decade, they stand as pioneers in leveraging technology to drive business success.
                        </p>
                        <p>
                            Multifaceted Expertise: From crafting cutting-edge software solutions to curating visually stunning UX designs, our showcased companies encompass a wide spectrum of expertise. Whether it's digital marketing strategies that resonate or graphic designs that captivate, these companies are adept at turning concepts into reality.
                        </p>
                        <p>
                            Cultural Fusion: Nestled in the picturesque Gilgit Baltistan, our featured companies represent a harmonious blend of traditional values and modern technology. This fusion not only defines their work but also adds a unique touch to every project they undertake.
                        </p>
                    </div>
                ))}

                <div>
                    <h2>
                        Join the Journey:
                    </h2>
                    <p>
                        As you explore [Your Website Name], we invite you to delve into the stories of these remarkable companies. Learn about their journey, discover their specializations, and witness the impact of their work on the global stage. Whether you are seeking a software development partner, a digital marketing expert, or a creative force for graphic and UX design, you'll find it all within the realms of Gilgit Baltistan.
                    </p>
                </div>

                <div>
                    <h2>
                        Connect with Excellence:
                    </h2>
                    <p>
                        Join us in celebrating the spirit of innovation, resilience, and excellence that defines the software development landscape of Gilgit Baltistan. Connect with the companies that have shaped the digital narrative of this region for the past decade, and explore the limitless possibilities that await in the realm of technology.
                    </p>
                </div>
            </section>
        </>
    )
}
