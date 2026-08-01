"use server";

import { supabaseExam } from "@/lib/supabaseExam";

export async function fetchGalleryImages() {
  try {
    const { data, error } = await supabaseExam.storage
      .from("GALLERY")
      .list("", {
        limit: 100,
        sortBy: {
          column: "created_at",
          order: "desc",
        },
      });

    if (error) throw error;

    const images = data.map((file) => {
      const {
        data: { publicUrl },
      } = supabaseExam.storage
        .from("GALLERY")
        .getPublicUrl(file.name);

      return {
        id: file.id,
        name: file.name,
        image_url: publicUrl,
        created_at: file.created_at,
      };
    });

    return {
      success: true,
      totalImages: images.length,
      images,
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      totalImages: 0,
      images: [],
      error: error.message,
    };
  }
}