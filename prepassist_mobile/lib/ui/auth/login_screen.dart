import 'package:flutter/material.dart';
import '../../core/supabase.dart';
import 'package:supabase_flutter/supabase_flutter.dart';
import '../dashboard/root_navigation.dart';

class NativeLoginVault extends StatefulWidget {
  const NativeLoginVault({super.key});

  @override
  State<NativeLoginVault> createState() => _NativeLoginVaultState();
}

class _NativeLoginVaultState extends State<NativeLoginVault> {
  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  bool _isLoading = false;
  bool _isLogin = true;

  Future<void> _executeAuth() async {
    final email = _emailController.text.trim();
    final password = _passwordController.text;

    if (email.isEmpty || password.isEmpty) {
      _showError('Missing Access Parameters');
      return;
    }

    setState(() => _isLoading = true);

    try {
      if (_isLogin) {
        await NativeDatabaseCore.client.auth.signInWithPassword(
          email: email,
          password: password,
        );
      } else {
        await NativeDatabaseCore.client.auth.signUp(
          email: email,
          password: password,
        );
        _showSuccess('Premium Account Generated. Please verify your identity if required.');
      }
      
      // Setup Route transition logically after Supabase native JWT extraction
      if (mounted && NativeDatabaseCore.client.auth.currentUser != null) {
          _showSuccess('Identity Verified. JWT Vault Secured Offline.');
          Navigator.of(context).pushReplacement(
            MaterialPageRoute(builder: (_) => const NativeRootNavigator()),
          );
      }
    } on AuthException catch (e) {
      _showError(e.message);
    } catch (e) {
      _showError('Server Node Collapse. Try again.');
    } finally {
      if (mounted) setState(() => _isLoading = false);
    }
  }

  void _showError(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(msg), backgroundColor: Colors.redAccent, behavior: SnackBarBehavior.floating),
    );
  }

  void _showSuccess(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(msg), backgroundColor: Colors.greenAccent.shade700, behavior: SnackBarBehavior.floating),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xff0f172a), // Exact Match to Tailwind Slate-900
      body: Stack(
        children: [
          // Ambient Glow Decoration organically mapped natively
          Positioned(
            top: -150,
            right: -100,
            child: Container(
              width: 400,
              height: 400,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.indigo.withOpacity(0.15),
              ),
            ),
          ),
          Positioned(
            bottom: -50,
            left: -100,
            child: Container(
              width: 300,
              height: 300,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.blueAccent.withOpacity(0.1),
              ),
            ),
          ),
          
          SafeArea(
            child: Center(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 24.0),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      // Organic Logo Element Mimicry
                      Container(
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(
                          color: Colors.white.withOpacity(0.05),
                          borderRadius: BorderRadius.circular(24),
                          border: Border.all(color: Colors.white.withOpacity(0.1)),
                        ),
                        child: const Icon(
                          Icons.dashboard_customize_rounded,
                          size: 64,
                          color: Colors.white,
                        ),
                      ),
                      const SizedBox(height: 32),
                      const Text(
                        'Gateway Security',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 32,
                          fontWeight: FontWeight.w900,
                          letterSpacing: -1,
                        ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        'Authenticate directly natively to map to the PrepAssist Network nodes.',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: Colors.grey.shade400,
                          fontSize: 14,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      const SizedBox(height: 40),
                      
                      // Premium Text Fields
                      _buildNativeField(
                        controller: _emailController,
                        hint: 'agent@upsc.com',
                        icon: Icons.alternate_email,
                        obscure: false,
                        keyboardType: TextInputType.emailAddress,
                      ),
                      const SizedBox(height: 16),
                      _buildNativeField(
                        controller: _passwordController,
                        hint: '••••••••',
                        icon: Icons.lock_outline_rounded,
                        obscure: true,
                        keyboardType: TextInputType.visiblePassword,
                      ),
                      const SizedBox(height: 32),

                      // Elite Execution Button
                      SizedBox(
                        width: double.infinity,
                        height: 55,
                        child: ElevatedButton(
                          onPressed: _isLoading ? null : _executeAuth,
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.indigoAccent,
                            foregroundColor: Colors.white,
                            elevation: 8,
                            shadowColor: Colors.indigoAccent.withOpacity(0.5),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(16),
                            ),
                          ),
                          child: _isLoading
                              ? const SizedBox(
                                  height: 24,
                                  width: 24,
                                  child: CircularProgressIndicator(
                                    color: Colors.white,
                                    strokeWidth: 2.5,
                                  ),
                                )
                              : Text(
                                  _isLogin ? 'Establish Secure Logic' : 'Provision Hardware Identity',
                                  style: const TextStyle(
                                    fontSize: 15,
                                    fontWeight: FontWeight.w800,
                                    letterSpacing: 1.2,
                                  ),
                                ),
                        ),
                      ),
                      const SizedBox(height: 16),
                      TextButton(
                        onPressed: () {
                          setState(() {
                            _isLogin = !_isLogin;
                          });
                        },
                        child: Text(
                          _isLogin ? "Generate New Signature" : "Access Exisiting Protocol Vault",
                          style: TextStyle(
                            color: Colors.indigo.shade200,
                            fontWeight: FontWeight.w700,
                            letterSpacing: 0.5,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildNativeField({
    required TextEditingController controller,
    required String hint,
    required IconData icon,
    required bool obscure,
    required TextInputType keyboardType,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.04),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white.withOpacity(0.1)),
      ),
      child: TextField(
        controller: controller,
        obscureText: obscure,
        keyboardType: keyboardType,
        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
        decoration: InputDecoration(
          hintText: hint,
          hintStyle: TextStyle(color: Colors.white.withOpacity(0.3)),
          prefixIcon: Icon(icon, color: Colors.indigoAccent.shade100, size: 20),
          border: InputBorder.none,
          contentPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 18),
        ),
      ),
    );
  }
}
