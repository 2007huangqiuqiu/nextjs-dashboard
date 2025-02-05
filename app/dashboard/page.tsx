import AcmeLogo from '@/app/ui/acme-logo';


export default function Page() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <div className="w-32 text-white md:w-40">
              <AcmeLogo />
            </div>
            <p>Dashboard Page</p>
        </div>
      );
    }