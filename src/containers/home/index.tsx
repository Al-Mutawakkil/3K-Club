'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeContainer = () => {
  const router = useRouter();

  const goToBackPage = () => {
    router.push('/back')
  }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF6F1] py-10">
          <header className="w-full max-w-5xl px-4 md:px-8">
            <div className="flex items-center justify-between py-6">
              <Image src="/next.svg" alt="KungKingKang Logo" width={120} height={32} />
              <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={goToBackPage}>
                Continue with Google
              </button>
            </div>
          </header>
    
          <main className="w-full max-w-4xl px-4 md:px-8">
            <h1 className="text-2xl font-bold text-center mb-4">Welcome to KungKingKang</h1>
            <p className="text-center text-gray-600 mb-6">
              We’re a platform making it easy for entrepreneurs to get and manage backing from friends, family, and other individuals with <span className="font-semibold">good kungkingkang</span>.
            </p>
            <Image
              src="/dinnercorporate.png"
              alt="Dinner Event"
              width={800}
              height={400}
              className="w-full rounded-lg mb-8"
            />
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-center mb-4">Sign in to learn more about KungKingKang</h2>
              <p className="text-center text-gray-600 mb-6">
                If you’ve been referred by a KungKingKang member, use the same Google account that you received the email invitation with.
              </p>
              <div className="flex justify-center">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={goToBackPage}>
                  {/* <Image
                    src="/google-icon.svg"
                    alt="Google"
                    width={20}
                    height={20}
                  /> */}
                  Continue with Google
                </button>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Referred with a non-Google email? <a href="#" className="text-blue-500 underline">Click here</a>
              </p>
            </section>
          </main>
        </div>
      );
}

export default HomeContainer;