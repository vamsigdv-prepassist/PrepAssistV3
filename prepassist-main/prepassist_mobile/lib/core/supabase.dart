import 'package:supabase_flutter/supabase_flutter.dart';

class NativeDatabaseCore {
  static const String _supabaseUrl = "https://pjubvuvqzwhvqxeeubcv.supabase.co";
  static const String _supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqdWJ2dXZxendodnF4ZWV1YmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNDU0NjYsImV4cCI6MjA4MzcyMTQ2Nn0.S6c_saGG8tVNvAegb8e9eP3d5PbPlY0BLDnM0HR5n_0";

  static Future<void> initializeVault() async {
    await Supabase.initialize(
      url: _supabaseUrl,
      anonKey: _supabaseAnonKey,
    );
  }

  static SupabaseClient get client => Supabase.instance.client;
}
