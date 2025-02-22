import { ColoredEdgesBox } from "@/components/colored-edges";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

export default function RegisterForm() {
  return (
    <section className="py-10 max-sm:px-5">
      <Container className="sbp:max-w-xl">
        <ColoredEdgesBox className="py-10">
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
                placeholder="Your Password"
                className="py-6 bg-transparent border-gray-500/50 text-base placeholder:text-[#a3a3a4] placeholder:text-base"
              />
            </div>

            <div className="mb-6">
              <Input
                placeholder="Confirm Password"
                className="py-6 bg-transparent border-gray-500/50 text-base placeholder:text-[#a3a3a4] placeholder:text-base"
              />
            </div>
            <div className="mb-6 flex items-center gap-3">
              <Checkbox className="" />
              <h3>
                I agree to{" "}
                <Link href={"/terms"} className="underline text-[#7fb210]">
                  Terms Of Use
                </Link>
              </h3>
            </div>
            <Button className="w-full bg-[#7fb210] text-white hover:bg-[#7fb210]/90 uppercase">
              Sign Up
            </Button>
            <div className="mt-2 text-center">
              Already have an account?{" "}
              <Link href={"/login"} className="underline text-[#7fb210]">
                Sign In
              </Link>
            </div>
          </div>
        </ColoredEdgesBox>
      </Container>
    </section>
  );
}
