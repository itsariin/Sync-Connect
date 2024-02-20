import {Button} from '@/components/ui/button';
// import {cn} from "@/lib/utils"
// const state = true;
// className={cn(
//   "bg-indigo-500",
//   state && "bg-red-500"
// )}

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">
      Hello Sync Connect in Action!!!
      </p>
      <Button>
        Click me
      </Button>
    </div>
  );
}
