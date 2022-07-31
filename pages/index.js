import { supabase } from "../utils/supabaseClient";
export default function Home() {
  return (
    <main>
      <h1>New next app</h1>
    </main>
  );
}

export async function getStaticProps() {
  const { data, error } = await supabase.from("operators").select();
  return {
    props: {
      operators: data,
    },
  };
}
