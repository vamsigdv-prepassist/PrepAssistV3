import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import '../../core/supabase.dart';

class NativeXRayScannerScreen extends StatefulWidget {
  const NativeXRayScannerScreen({super.key});

  @override
  State<NativeXRayScannerScreen> createState() => _NativeXRayScannerScreenState();
}

class _NativeXRayScannerScreenState extends State<NativeXRayScannerScreen> {
  File? _imageFile;
  final ImagePicker _picker = ImagePicker();
  
  bool _isExtracting = false;
  String _subject = "polity";
  List<dynamic>? _parsedData;
  String? _errorParam;

  Future<void> _captureImage() async {
    final XFile? photo = await _picker.pickImage(source: ImageSource.camera, imageQuality: 80);
    if (photo != null) {
      setState(() {
        _imageFile = File(photo.path);
        _parsedData = null;
        _errorParam = null;
      });
    }
  }

  Future<void> _pickGalleryImage() async {
    final XFile? image = await _picker.pickImage(source: ImageSource.gallery, imageQuality: 80);
    if (image != null) {
      setState(() {
        _imageFile = File(image.path);
        _parsedData = null;
        _errorParam = null;
      });
    }
  }

  Future<void> _executeXRayExtraction() async {
    if (_imageFile == null) return;

    final session = NativeDatabaseCore.client.auth.currentSession;
    if (session == null || session.accessToken.isEmpty) {
      setState(() => _errorParam = "Identity Vault verification collapsed natively.");
      return;
    }

    setState(() {
       _isExtracting = true;
       _errorParam = null;
    });

    try {
      // Map physical byte-arrays identically matching the exact Form-Data parameters cleanly expected natively back in the Next.js API.
      var request = http.MultipartRequest('POST', Uri.parse('http://10.0.2.2:3000/api/xray-agent'));
      
      request.headers.addAll({
        'Authorization': 'Bearer ${session.accessToken}',
        // Fetch multipart boundaries are strictly inherently managed cleanly securely natively by flutter.
      });

      request.fields['subject'] = _subject;
      request.files.add(await http.MultipartFile.fromPath('file', _imageFile!.path));

      var streamedResponse = await request.send();
      var response = await http.Response.fromStream(streamedResponse);
      var data = jsonDecode(response.body);

      if (response.statusCode == 200) {
        setState(() {
           _parsedData = data['data'];
        });
      } else if (response.statusCode == 402) {
         setState(() => _errorParam = "Insufficient AI Compute Credits Native (5 req).");
      } else {
         throw Exception(data['error'] ?? "Unknown Matrix Error from NodeJS Block.");
      }
    } catch (e) {
      setState(() => _errorParam = e.toString());
    } finally {
      if (mounted) setState(() => _isExtracting = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC),
      appBar: AppBar(
        title: const Text('X-Ray Scanner Engine', style: TextStyle(fontWeight: FontWeight.w900, color: Colors.black87, fontSize: 18)),
        backgroundColor: Colors.white,
        elevation: 0,
        iconTheme: const IconThemeData(color: Colors.black87),
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(1.0),
          child: Container(color: Colors.grey.shade200, height: 1.0),
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Subject Selection Logic
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.grey.shade200)),
              child: DropdownButtonHideUnderline(
                child: DropdownButton<String>(
                  value: _subject,
                  isExpanded: true,
                  icon: const Icon(Icons.expand_more_rounded, color: Colors.indigo),
                  style: const TextStyle(fontWeight: FontWeight.w800, color: Colors.indigo, fontSize: 16),
                  items: const [
                    DropdownMenuItem(value: "polity", child: Text("Polity Matrix Offline")),
                    DropdownMenuItem(value: "history", child: Text("History Matrix Offline")),
                    DropdownMenuItem(value: "economy", child: Text("Economy Matrix Offline")),
                  ],
                  onChanged: _isExtracting ? null : (val) => setState(() => _subject = val!),
                ),
              ),
            ),
            const SizedBox(height: 24),

            // Hardware Camera Viewfinder
            GestureDetector(
              onTap: _isExtracting ? null : _captureImage,
              child: Container(
                height: 280,
                decoration: BoxDecoration(
                  color: Colors.black87,
                  borderRadius: BorderRadius.circular(24),
                  image: _imageFile != null ? DecorationImage(image: FileImage(_imageFile!), fit: BoxFit.cover, colorFilter: ColorFilter.mode(Colors.black.withOpacity(0.3), BlendMode.darken)) : null,
                  boxShadow: [BoxShadow(color: Colors.indigo.withOpacity(0.2), blurRadius: 20, offset: const Offset(0, 10))],
                ),
                child: Center(
                  child: _imageFile == null
                      ? Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            const Icon(Icons.camera_rounded, size: 60, color: Colors.indigoAccent),
                            const SizedBox(height: 16),
                            const Text("Commence Physical Optical Scan", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                            Text("Capture Target Syllabus Matrix exactly", style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 12)),
                          ],
                        )
                      : (_isExtracting ? const CircularProgressIndicator(color: Colors.indigoAccent) : const Icon(Icons.check_circle_rounded, size: 60, color: Colors.greenAccent)),
                ),
              ),
            ),

            const SizedBox(height: 16),
            if (_imageFile == null)
              TextButton.icon(onPressed: _pickGalleryImage, icon: const Icon(Icons.photo_library_rounded), label: const Text("Select Pre-Captured Array")),

            if (_errorParam != null)
              Container(
                margin: const EdgeInsets.only(top: 16),
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(color: Colors.red.shade50, borderRadius: BorderRadius.circular(12), border: Border.all(color: Colors.red.shade200)),
                child: Row(children: [const Icon(Icons.error_outline, color: Colors.red), const SizedBox(width: 8), Expanded(child: Text(_errorParam!, style: const TextStyle(color: Colors.red, fontWeight: FontWeight.bold, fontSize: 12)))]),
              ),

            const SizedBox(height: 32),

            if (_imageFile != null && !_isExtracting && _parsedData == null)
              ElevatedButton.icon(
                onPressed: _executeXRayExtraction,
                icon: const Icon(Icons.bolt, color: Colors.white),
                label: const Text("Execute Flash RAG Inference Log", style: TextStyle(fontWeight: FontWeight.w800)),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.indigo,
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 20),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                ),
              ),

            // Neural Flash Data Rendering UI Mapping cleanly securely
            if (_parsedData != null)
              ..._parsedData!.map((metric) => Container(
                margin: const EdgeInsets.only(top: 16),
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(20), border: Border.all(color: Colors.indigo.shade100)),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        const Icon(Icons.hub_rounded, color: Colors.indigo, size: 18),
                        const SizedBox(width: 8),
                        Text(metric['Concept'], style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w900, color: Colors.black87)),
                      ],
                    ),
                    const SizedBox(height: 12),
                    Text(metric['Explanation'], style: TextStyle(fontSize: 13, color: Colors.grey.shade700, height: 1.5, fontWeight: FontWeight.w500)),
                    const SizedBox(height: 16),
                    Container(padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6), decoration: BoxDecoration(color: Colors.purple.shade50, borderRadius: BorderRadius.circular(8)), child: Text("Relevance: ${metric['Syllabus Relevance']}", style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Colors.purple.shade700))),
                  ],
                ),
              )),
          ],
        ),
      ),
    );
  }
}
