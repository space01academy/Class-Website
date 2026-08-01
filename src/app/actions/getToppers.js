"use server";

import { supabase } from "@/lib/supabase";


export async function getToppers() {
  try {
    const { data, error } = await supabase
      .from("toppers")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      data: [],
      error: error.message,
    };
  }
}