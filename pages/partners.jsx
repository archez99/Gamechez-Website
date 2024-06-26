
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partners
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://codeshare.me">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/icons/1188363544694104064/a_0c7467e6385fc43bf8aa0c9c24c4d180.gif" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Türkiye Kıraathanesi</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                     Türkiye Kıraathanesi İnsanlarla KOnuşup Sohbet Edip Eğlenebielceğiniz Güzel Bir Sunucudur
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>


                           

                </div>
                <div className="py-10"></div>
        </>
    );
};
