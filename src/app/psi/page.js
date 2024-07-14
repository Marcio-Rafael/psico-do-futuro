import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter()
  return (
    <div>
      <button className='widget-button text-sm text-blue-700 hover:underline'></button>
    </div>

  );
}
