import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const PrepAssistAdminApp());
}

class PrepAssistAdminApp extends StatelessWidget {
  const PrepAssistAdminApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'PrepAssist Admin Operations',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blueGrey),
        useMaterial3: true,
      ),
      debugShowCheckedModeBanner: false,
      home: const AdminWebShell(),
    );
  }
}

class AdminWebShell extends StatefulWidget {
  const AdminWebShell({super.key});

  @override
  State<AdminWebShell> createState() => _AdminWebShellState();
}

class _AdminWebShellState extends State<AdminWebShell> {
  late final WebViewController controller;
  bool isLoading = true;

  @override
  void initState() {
    super.initState();

    controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(const Color(0xFF0F172A)) // Tailwind Slate 900
      ..setNavigationDelegate(
        NavigationDelegate(
          onProgress: (int progress) {
            if (progress == 100) {
              setState(() => isLoading = false);
            }
          },
          onPageStarted: (String url) => setState(() => isLoading = true),
          onPageFinished: (String url) => setState(() => isLoading = false),
          onWebResourceError: (WebResourceError error) {
             debugPrint('Admin Matrix Network Outage: \${error.description}');
          },
        ),
      )
      // Connect explicitly exactly to the Admin Node Next.js layer logic dynamically inside Sandbox!
      ..loadRequest(Uri.parse('http://10.0.2.2:3000/admin/users'));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0F172A),
      body: SafeArea(
        child: Stack(
          children: [
            WebViewWidget(controller: controller),
            if (isLoading)
              const Center(
                child: CircularProgressIndicator(color: Colors.amberAccent),
              ),
          ],
        ),
      ),
    );
  }
}
