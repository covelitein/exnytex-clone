import { ColoredEdgesBox } from "@/components/colored-edges";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

export default function LoginForm() {
  return (
    <section className="py-10 max-sm:px-5">
      <Container className="sbp:max-w-xl">
        <ColoredEdgesBox className="py-10 px-6">
          <div className="">
            <h1 className="text-center font-semibold">Registration</h1>
          </div>
          <div className="mt-6">
            <div className="mb-6">
              <Input
                placeholder="Email"
                className="py-6 bg-transparent border-gray-500/50 text-base placeholder:text-[#a3a3a4] placeholder:text-base"
              />
            </div>
            <div className="mb-6">
              <Input
                placeholder="Password"
                className="py-6 bg-transparent border-gray-500/50 text-base placeholder:text-[#a3a3a4] placeholder:text-base"
              />
            </div>
            <div className="mb-6 flex items-center gap-3">
              <Checkbox className="" />
              <h3>
                Remember Me
              </h3>
            </div>
            <Button className="w-full bg-[#7fb210] text-white hover:bg-[#7fb210]/90 uppercase">
              Sign In
            </Button>
            <div className="mt-2 text-center">
              No account?{" "}
              <Link href={"/register"} className="underline text-[#7fb210]">
                Sign Up
              </Link>
            </div>
          </div>
        </ColoredEdgesBox>
      </Container>
    </section>
  );
}
