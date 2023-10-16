import DummyContent from "@/components/DummyContent";
import Navbar from "@/components/Navbar";
import ScrollContainer from "@/components/ScrollContainer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-gradient-to-br from-[#100e1f] to-[#070139]">
      <ScrollContainer>
        <DummyContent />
      </ScrollContainer>
      <Navbar />
    </section>
  );
}
