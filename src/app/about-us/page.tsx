import React from "react";
import Image from "next/image";
const AboutUs: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 text-[#003366FF] w-full max-w-5xl">
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-primary-500">About us</h1>
          <p className="text-[#c3c7c4] mb-2">
            We have a bunch of cars for you! Let&apos;s explore and find your car
            rental, make it happen
          </p>
          <div className="flex justify-center">
            <Image
              src="/assets/images/about_us_car.jpg"
              alt="Car"
              width={800}
              height={450}
              className="w-4/5 rounded-lg shadow-xl my-6"
            />
          </div>
        </section>
        <hr className="my-6 border-[#BDC1CAFF] dark:border-white w-5/6 mx-auto py-4" />

        <section className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Lorem ipsum dolor sit amet?</h2>
            <p className="text-gray-600">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>
                Pretium nibh ipsum consequat nisl vel pretium. Sed vulputate mi
                sit
              </li>
              <li>
                Tristique nulla aliquet enim tortor at auctor urna. Sit amet
                aliquam id diam maecenas
              </li>
              <li>
                Nam libero justo laoreet sit amet. Lacus sed viverra tellus in
                hac
              </li>
              <li>
                Tempus imperdiet nulla malesuada pellentesque elit eget gravida
                cum sociis
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">
              Lorem ipsum dolor sit amet, consectetur nam lib adipiscing elit?
            </h2>
            <p className="text-gray-600">
              Augue lacus viverra vitae congue eu consequat ac felis donec.
              Pellentesque pulvinar pellentesque habitant morbi tristique
              senectus.
            </p>
            <div className="flex justify-center">
              <Image
                src="/assets/images/about_us_2.jpg"
                alt="Handing keys"
                width={800}
                height={450}
                className="w-4/5 rounded-lg my-6 shadow-xl"
              />
            </div>
            <p className="text-gray-600">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                Pretium nibh ipsum consequat nisl vel pretium. Sed vulputate mi
                sit
              </li>
              <li>
                Tristique nulla aliquet enim tortor at auctor urna. Sit amet
                aliquam id diam maecenas
              </li>
              <li>
                Nam libero justo laoreet sit amet. Lacus sed viverra tellus in
                hac
              </li>
              <li>
                Tempus imperdiet nulla malesuada pellentesque elit eget gravida
                cum sociis
              </li>
            </ol>
          </div>

          <div className="relative w-3/4 max-w-md p-6 bg-[#f3f4f6] rounded-md shadow-md mx-auto my-6">
            <div className="absolute top-0 left-0 h-full w-2 bg-yellow-400 rounded-l-md"></div>
            <p className="text-yellow-400 font-semibold text-lg">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
              porta rhoncus, viverra sit et auctor. Augue in volutpat sed eget
              in etiam.&quot;

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
              porta rhoncus, viverra sit et auctor. Augue in volutpat sed eget
              in etiam.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">
              Lorem ipsum dolor sit amet, consectetur nam lib?
            </h2>
            <p className="text-gray-600">
              Augue lacus viverra vitae congue eu consequat ac felis donec.
              Pellentesque pulvinar pellentesque habitant morbi tristique
              senectus.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">
              Lorem ipsum dolor sit amet, consectetur nam lib elit?
            </h2>
            <p className="text-gray-600">
              Augue lacus viverra vitae congue eu consequat ac felis donec.
              Pellentesque pulvinar pellentesque habitant morbi tristique
              senectus.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;