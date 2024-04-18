import React from 'react';
import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import ClientCheckoutButton from '@/components/CheckoutButton';

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const userEmail = user.email || '';
  const productIds = ['pro_01hvkkv164kpxjmaq0s9vb2r9x', 'pro_01hvcx3fcwmw146qzvfy438yzx'];

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      {/* ... */}
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Header />
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          <FetchDataSteps />
          <ClientCheckoutButton userEmail={userEmail} productIds={productIds} />
        </main>
      </div>
      {/* ... */}
    </div>
  );
}
