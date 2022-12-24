export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      images: {
        Row: {
          id: number;
          image_url: string | null;
          width: number | null;
          height: number | null;
        };
        Insert: {
          id?: number;
          image_url?: string | null;
          width?: number | null;
          height?: number | null;
        };
        Update: {
          id?: number;
          image_url?: string | null;
          width?: number | null;
          height?: number | null;
        };
      };
      posts: {
        Row: {
          id: number;
          thumbnail_id: number;
          id_image: number | null;
          theme_id: number;
          title: string | null;
          author: string | null;
          content: string | null;
          description: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          thumbnail_id: number;
          id_image?: number | null;
          theme_id: number;
          title?: string | null;
          author?: string | null;
          content?: string | null;
          description?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          thumbnail_id?: number;
          id_image?: number | null;
          theme_id?: number;
          title?: string | null;
          author?: string | null;
          content?: string | null;
          description?: string | null;
          created_at?: string;
        };
      };
      themes: {
        Row: {
          id: number;
          theme: string | null;
        };
        Insert: {
          id?: number;
          theme?: string | null;
        };
        Update: {
          id?: number;
          theme?: string | null;
        };
      };
      thumbnails: {
        Row: {
          id: number;
          thumbnail_url: string | null;
          width: number | null;
          height: number | null;
        };
        Insert: {
          id?: number;
          thumbnail_url?: string | null;
          width?: number | null;
          height?: number | null;
        };
        Update: {
          id?: number;
          thumbnail_url?: string | null;
          width?: number | null;
          height?: number | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: {
      possibilities:
        | "all"
        | "frameworks_libs"
        | "personal_professional"
        | "tools"
        | "back_end"
        | "front_end";
    };
  };
}
