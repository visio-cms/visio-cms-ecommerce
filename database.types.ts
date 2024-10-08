export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      category: {
        Row: {
          created_at: string | null
          gender_category_id: number
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          gender_category_id: number
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          gender_category_id?: number
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gender_category_fkey"
            columns: ["gender_category_id"]
            isOneToOne: false
            referencedRelation: "gender_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      folders: {
        Row: {
          created_at: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      gender_categories: {
        Row: {
          created_at: string | null
          gender: string
          id: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          gender: string
          id?: never
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          gender?: string
          id?: never
          updated_at?: string | null
        }
        Relationships: []
      }
      pages: {
        Row: {
          author: string
          blocks: Json | null
          blocks_dev: Json | null
          created_at: string | null
          folder_id: string | null
          id: string
          name: string
          publish_date: string | null
          seo: Json | null
          slug: string
          status: Json | null
          tags: string | null
          updated_at: string | null
        }
        Insert: {
          author: string
          blocks?: Json | null
          blocks_dev?: Json | null
          created_at?: string | null
          folder_id?: string | null
          id?: string
          name: string
          publish_date?: string | null
          seo?: Json | null
          slug: string
          status?: Json | null
          tags?: string | null
          updated_at?: string | null
        }
        Update: {
          author?: string
          blocks?: Json | null
          blocks_dev?: Json | null
          created_at?: string | null
          folder_id?: string | null
          id?: string
          name?: string
          publish_date?: string | null
          seo?: Json | null
          slug?: string
          status?: Json | null
          tags?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pages_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pages_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "folders"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          available_colors: Json
          category_id: string
          created_at: string | null
          description: string
          id: number
          is_featured: boolean
          name: string
          photos: Json
          price: number
          updated_at: string | null
        }
        Insert: {
          available_colors: Json
          category_id: string
          created_at?: string | null
          description: string
          id?: never
          is_featured?: boolean
          name: string
          photos: Json
          price: number
          updated_at?: string | null
        }
        Update: {
          available_colors?: Json
          category_id?: string
          created_at?: string | null
          description?: string
          id?: never
          is_featured?: boolean
          name?: string
          photos?: Json
          price?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
        ]
      }
      project_configuration: {
        Row: {
          global_blocks: Json | null
          id: string
          scripts: Json | null
          theme: Json | null
        }
        Insert: {
          global_blocks?: Json | null
          id?: string
          scripts?: Json | null
          theme?: Json | null
        }
        Update: {
          global_blocks?: Json | null
          id?: string
          scripts?: Json | null
          theme?: Json | null
        }
        Relationships: []
      }
      uploaded_files: {
        Row: {
          file_height: number | null
          file_name: string | null
          file_width: number | null
          hashed_file_name: string | null
          id: number
          uploaded_at: string | null
        }
        Insert: {
          file_height?: number | null
          file_name?: string | null
          file_width?: number | null
          hashed_file_name?: string | null
          id?: never
          uploaded_at?: string | null
        }
        Update: {
          file_height?: number | null
          file_name?: string | null
          file_width?: number | null
          hashed_file_name?: string | null
          id?: never
          uploaded_at?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          photo: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          photo?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          photo?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      verify_password: {
        Args: {
          password: string
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
