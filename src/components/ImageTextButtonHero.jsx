import Image from "@/components/Image";

const ImageTextButtonHero = ({
    imageUrl,
    imageAlt,
    text,
    onRequestNewText,
    buttonText
}) => {
    return (
        <div
            className="fluid-container flex min-h-screen items-center justify-around flex-wrap-reverse lg:flex-wrap lg:space-x-10">
            <div className="w-full md:w-1/2">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    width={200}
                    height={100}
                    className="rounded overflow-hidden custom-rotate"
                    priority
                />
            </div>
            <div className="text-white w-full lg:w-1/3 text-5xl">
                <h2>{text}</h2>
                <button
                    className="mt-6 px-4 py-2 shadow-xl shadow-amber-50 custom-rotate hover:shadow-amber-100 bg-amber-500 hover:bg-amber-600 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50"
                    onClick={onRequestNewText}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default ImageTextButtonHero;
