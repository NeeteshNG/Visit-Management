import { NGtryLogo } from "@/public/logo/logos";

export default function LoadingComponent() {
  return (
    <div className="flex items-center flex-col justify-center mt-10 h-[100vh] w-[100%]">
      <div className="flex items-center flex-col justify-center mt-10 h-[10vh]">
        <NGtryLogo />
      </div>
      <div className="mt-10 flex items-center justify-center">
        <div className="loader"></div>
      </div>
      <style jsx>{`
        .loader {
          border: 4px solid rgba(99, 107, 47, 0.2);
          border-top: 4px solid rgba(99, 107, 47, 1);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
