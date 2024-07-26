import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import FormItem from '@/shared/FormItem';
import Input from '@/shared/Input/Input';
// Assurez-vous que le chemin de l'image est correct
import imageLogin from '@/images/go.png';
import TopNav from '@/components/Header/TopNav';

const PageLogin = () => {
  return (
    <div>
      <TopNav />

      <div className="nc-PageLogin flex min-h-full bg-beige" data-nc-id="PageLogin">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-md w-full">
            <h2 className="my-8 flex items-center justify-center text-3xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
              Sign In
            </h2>
            <div className="space-y-6">
              <div className="grid gap-6">
                <FormItem label="Email address">
                  <Input
                    type="email"
                    rounded="rounded-none"
                    sizeClass="h-12 px-4 py-3"
                    placeholder="example@example.com"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  />
                </FormItem>
                <FormItem label="Password">
                  <Input
                    type="password"
                    rounded="rounded-none"
                    sizeClass="h-12 px-4 py-3"
                    placeholder="*****************"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  />
                </FormItem>
                <ButtonPrimary className="bg-yellow-500 text-white hover:bg-yellow-600">Sign In</ButtonPrimary>
              </div>
              <div className="flex justify-between items-center mt-4">
                <Link href="/forgot-pass" className="text-sm text-yellow-500">
                  Forgot password
                </Link>
              </div>
              <div className="text-center mt-4 text-sm">
                <span>I don&apos;t have an account? </span>
                <Link href="/signup" className="text-yellow-500">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex relative w-1/2 h-auto pt-4 pb-8 flex items-center justify-center">
          <div className="relative w-180 h-180">
            <Image
              src={imageLogin}
              alt="Login Background"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;