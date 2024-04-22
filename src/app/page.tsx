import Nav from "@/components/Nav";
import { ProfileForm } from "@/components/ProfileForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <Nav />
      <section className="py-12 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Shadcn is awesome!</h1>
        <p className="text-2xl text-muted-foreground">
          {" "}
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </p>
      </section>
      <div className="flex gap-6 items-center justify-center">
        <Button variant={"secondary"}>Learn More</Button>
        <Button>Enroll Now</Button>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <ProfileForm />
      </div>
    </main>
  );
}
