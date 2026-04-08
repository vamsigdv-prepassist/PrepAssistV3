import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import '../../core/supabase.dart';

class NativeAIMentorScreen extends StatefulWidget {
  const NativeAIMentorScreen({super.key});

  @override
  State<NativeAIMentorScreen> createState() => _NativeAIMentorScreenState();
}

class _NativeAIMentorScreenState extends State<NativeAIMentorScreen> {
  final TextEditingController _inputController = TextEditingController();
  final ScrollController _scrollController = ScrollController();
  
  final List<Map<String, dynamic>> _messages = [
    {
      "role": "model",
      "parts": [{"text": "### Greetings, Aspirant.\nI am the PrepAssist Core Mentor natively executing offline capability logic. How can I map strings into conceptual strategy arrays today?"}]
    }
  ];
  
  bool _isGenerating = false;

  Future<void> _submitPrompt(String prompt) async {
    if (prompt.trim().isEmpty || _isGenerating) return;

    final session = NativeDatabaseCore.client.auth.currentSession;
    if (session == null || session.accessToken.isEmpty) {
      _showError("Identity Hardware Token Validation Failed.");
      return;
    }

    setState(() {
      _messages.add({
        "role": "user",
        "parts": [{"text": prompt}]
      });
      _isGenerating = true;
    });

    _inputController.clear();
    _scrollToBottom();

    try {
      // Execute rigorously mapped Native Post directly to Vercel/NextJS routing natively avoiding WebViews completely.
      // 10.0.2.2 specifically targets the Local PC NodeJS engine gracefully explicitly from Android Emulator Sandbox environments.
      final response = await http.post(
        Uri.parse('http://10.0.2.2:3000/api/agent'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ${session.accessToken}'
        },
        // We explicitly slice out the initial model greeting since Deep Native APIs rigorously enforce sequential payload arrays dynamically
        body: jsonEncode({
          "messages": _messages.where((m) => !(_messages.indexOf(m) == 0 && m['role'] == 'model')).toList()
        }),
      );

      final data = jsonDecode(response.body);

      if (response.statusCode == 200) {
        setState(() {
          _messages.add({
             "role": "model",
             "parts": [{"text": data['text']}]
          });
        });
        _scrollToBottom();
      } else if (response.statusCode == 402) {
         _showError("Insufficient AI Compute Credits natively.");
         _rollbackFailedMessage(prompt);
      } else {
         throw Exception(data['error'] ?? "Unknown Matrix execution panic.");
      }
    } catch (e) {
      _showError(e.toString());
      _rollbackFailedMessage(prompt);
    } finally {
      if (mounted) setState(() => _isGenerating = false);
    }
  }

  void _scrollToBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_scrollController.hasClients) {
        _scrollController.animateTo(
          _scrollController.position.maxScrollExtent + 200, // Overscroll slightly for smooth UX organically
          duration: const Duration(milliseconds: 400),
          curve: Curves.easeOutCubic,
        );
      }
    });
  }

  void _rollbackFailedMessage(String prompt) {
    setState(() {
       _messages.removeLast();
       _inputController.text = prompt; // Return prompt gracefully so user doesn't physically lose massive paragraphs
    });
  }

  void _showError(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(msg), backgroundColor: Colors.redAccent, behavior: SnackBarBehavior.floating),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFCFB),
      appBar: AppBar(
        title: const Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('AI Study Mentor', style: TextStyle(fontWeight: FontWeight.w900, color: Colors.black87, fontSize: 18)),
            Text('Powered explicitly by PrepAssist Core', style: TextStyle(fontSize: 10, color: Colors.indigo, fontWeight: FontWeight.bold, letterSpacing: 0.5)),
          ],
        ),
        backgroundColor: Colors.white,
        elevation: 0,
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(1.0),
          child: Container(color: Colors.grey.shade200, height: 1.0),
        ),
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              controller: _scrollController,
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
              itemCount: _messages.length + (_isGenerating ? 1 : 0),
              itemBuilder: (context, index) {
                if (index == _messages.length && _isGenerating) {
                  return _buildTypingIndicator();
                }
                
                final msg = _messages[index];
                final isUser = msg["role"] == "user";
                return _buildMessageBubble(msg["parts"][0]["text"], isUser);
              },
            ),
          ),
          
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: Colors.white,
              boxShadow: [
                BoxShadow(color: Colors.black.withOpacity(0.04), blurRadius: 20, offset: const Offset(0, -5))
              ],
            ),
            child: SafeArea(
              child: Row(
                children: [
                  Expanded(
                    child: Container(
                      decoration: BoxDecoration(color: Colors.grey.shade50, borderRadius: BorderRadius.circular(24), border: Border.all(color: Colors.grey.shade200)),
                      child: TextField(
                        controller: _inputController,
                        maxLines: 4,
                        minLines: 1,
                        textInputAction: TextInputAction.send,
                        onSubmitted: (val) => _submitPrompt(val),
                        decoration: InputDecoration(
                          hintText: 'Formulate query specifically...',
                          hintStyle: TextStyle(color: Colors.grey.shade400, fontWeight: FontWeight.w500),
                          border: InputBorder.none,
                          contentPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 12),
                  InkWell(
                    onTap: () => _submitPrompt(_inputController.text),
                    borderRadius: BorderRadius.circular(20),
                    child: Container(
                      padding: const EdgeInsets.all(14),
                      decoration: BoxDecoration(color: Colors.indigo, borderRadius: BorderRadius.circular(20), boxShadow: [BoxShadow(color: Colors.indigo.withOpacity(0.4), blurRadius: 10, offset: const Offset(0, 4))]),
                      child: const Icon(Icons.send_rounded, color: Colors.white, size: 20),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildMessageBubble(String text, bool isUser) {
    return Align(
      alignment: isUser ? Alignment.centerRight : Alignment.centerLeft,
      child: Container(
        constraints: BoxConstraints(maxWidth: MediaQuery.of(context).size.width * 0.8),
        margin: const EdgeInsets.only(bottom: 16),
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.03), blurRadius: 8, offset: const Offset(0, 3))],
         color: isUser ? const Color(0xFF0F172A) : Colors.white,
          borderRadius: BorderRadius.only(
            topLeft: const Radius.circular(20),
            topRight: const Radius.circular(20),
            bottomLeft: Radius.circular(isUser ? 20 : 4),
            bottomRight: Radius.circular(isUser ? 4 : 20),
         ),
         border: isUser ? null : Border.all(color: Colors.grey.shade200, width: 1.5)
        ),
        child: Text(
          text.replaceAll('###', '').replaceAll('**', ''), // Simplified formatting dynamically avoiding massive native package installs rigorously keeping FPS stable
          style: TextStyle(
            color: isUser ? Colors.white : Colors.black87,
            fontWeight: FontWeight.w500,
            height: 1.5,
          ),
        ),
      ),
    );
  }

  Widget _buildTypingIndicator() {
    return const Align(
      alignment: Alignment.centerLeft,
      child: Padding(
        padding: EdgeInsets.only(bottom: 16),
        child: Row(
          children: [
            SizedBox(
              height: 20,
              width: 20,
              child: CircularProgressIndicator(strokeWidth: 2.5, color: Colors.indigo),
            ),
            SizedBox(width: 12),
            Text("Synthesizing Neural Output...", style: TextStyle(color: Colors.indigo, fontSize: 12, fontWeight: FontWeight.w800, letterSpacing: 0.5)),
          ],
        ),
      ),
    );
  }
}
