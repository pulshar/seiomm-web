import React from 'react';

const sponsors = [
    { file: "logo-accord.svg", url: "https://www.accord-healthcare.com" },
    { file: "logo-amgen.svg", url: "https://www.amgen.es" },
    { file: "logo-faesfarma.svg", url: "https://faesfarma.com" },
    { file: "logo-gedeonritcher.svg", url: "https://www.gedeonrichter.es" },
    { file: "logo-gp-pharm.png", url: "https://www.gp-pharm.com" },
    { file: "logo-italfarmaco.svg", url: "https://www.italfarmaco.es" },
    { file: "logo-kyowa.svg", url: "https://international.kyowakirin.com" },
    { file: "logo-procare.webp", url: "https://procarehealth.com" },
    { file: "logo-rubio.svg", url: "https://www.laboratoriosrubio.com" },
    { file: "logo-stada.svg", url: "https://www.stada.es" },
    { file: "logo-theramex.svg", url: "https://www.theramex.com" },
    { file: "logo-ucb.svg", url: "https://www.ucb-iberia.com" }
];

export function SponsorsMarquee() {
    return (
        <section className="py-12 bg-seiomm-gray overflow-hidden border-b border-seiomm-dark/10">
            {/* <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12">
                <div className="flex items-center justify-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-seiomm-cyan shrink-0" />
                    <h3 className="text-center font-mono text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-seiomm-mute">
                        Patrocinadores de la web
                    </h3>
                </div>
            </div> */}

            <div className="relative flex overflow-hidden w-full group">
                {/* We use two sets to create a seamless infinite loop. 
            Moving by -50% shifts it exactly one full set. */}
                <div className="flex w-max animate-marquee-infinite logos">
                    {[1, 2].map((set) => (
                        <div key={set} className="flex gap-12 md:gap-24 pr-12 md:pr-24 w-max items-center">
                            {sponsors.map((sponsor, index) => (
                                <a
                                    key={index}
                                    href={sponsor.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 flex items-center justify-center w-[130px] lg:w-[160px]"
                                >
                                    <div
                                        className="w-full h-12 md:h-16 lg:h-20 bg-seiomm-mute/80 hover:bg-seiomm-dark transition-colors duration-300"
                                        style={{
                                            WebkitMaskImage: `url(/patrocinadores-web/${sponsor.file})`,
                                            maskImage: `url(/patrocinadores-web/${sponsor.file})`,
                                            WebkitMaskSize: "contain",
                                            maskSize: "contain",
                                            WebkitMaskRepeat: "no-repeat",
                                            maskRepeat: "no-repeat",
                                            WebkitMaskPosition: "center",
                                            maskPosition: "center",
                                        }}
                                        title={sponsor.file.split('.')[0].replace('logo-', '').toUpperCase()}
                                    />
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
