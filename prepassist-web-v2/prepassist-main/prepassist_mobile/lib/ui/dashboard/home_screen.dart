import 'package:flutter/material.dart';
import '../xray/xray_scanner_screen.dart';

class NativeHomeScreen extends StatelessWidget {
  const NativeHomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFC), // Tailind Slate-50 Base
      body: CustomScrollView(
        physics: const BouncingScrollPhysics(),
        slivers: [
          SliverAppBar(
            expandedHeight: 120.0,
            floating: true,
            pinned: true,
            elevation: 0,
            backgroundColor: Colors.white,
            flexibleSpace: FlexibleSpaceBar(
              titlePadding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
              title: const Text(
                'UPSC OS Dashboard',
                style: TextStyle(
                  color: Color(0xFF0F172A),
                  fontWeight: FontWeight.w900,
                  letterSpacing: -0.5,
                ),
              ),
              background: Container(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    colors: [Colors.indigo.shade50.withOpacity(0.5), Colors.white],
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                  ),
                ),
              ),
            ),
          ),
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.all(24.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Active Neural Networks',
                    style: TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w800,
                      color: Colors.indigoAccent,
                      letterSpacing: 1.2,
                    ),
                  ),
                  const SizedBox(height: 16),
                  _buildDashboardCard(
                    context: context,
                    title: 'X-Ray Reader Protocol',
                    subtitle: 'Native Camera Vector Database Matrix',
                    icon: Icons.document_scanner_rounded,
                    colors: [Colors.indigo.shade600, Colors.indigo.shade400],
                    target: const NativeXRayScannerScreen(),
                  ),
                  const SizedBox(height: 16),
                  _buildDashboardCard(
                    title: 'AI Elite Mentor',
                    subtitle: 'Execute high-speed intelligence queues.',
                    icon: Icons.electric_bolt_rounded,
                    colors: [Colors.purple.shade600, Colors.purpleAccent.shade400],
                  ),
                  const SizedBox(height: 16),
                  _buildDashboardCard(
                    title: 'Mock Strategy Engine',
                    subtitle: 'Analyze simulated metrics flawlessly.',
                    icon: Icons.auto_graph_rounded,
                    colors: [Colors.blue.shade700, Colors.cyan.shade500],
                  ),
                  const SizedBox(height: 32),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }

  Widget _buildDashboardCard({
    BuildContext? context,
    required String title,
    required String subtitle,
    required IconData icon,
    required List<Color> colors,
    Widget? target,
  }) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: colors,
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(24),
        boxShadow: [
          BoxShadow(
            color: colors[0].withOpacity(0.3),
            blurRadius: 15,
            offset: const Offset(0, 8),
          )
        ],
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(24),
          onTap: () {
            if (target != null && context != null) {
              Navigator.push(context, MaterialPageRoute(builder: (ctx) => target));
            }
          },
          child: Padding(
            padding: const EdgeInsets.all(24.0),
            child: Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.2),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Icon(icon, color: Colors.white, size: 28),
                ),
                const SizedBox(width: 20),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        title,
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 18,
                          fontWeight: FontWeight.w800,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        subtitle,
                        style: TextStyle(
                          color: Colors.white.withOpacity(0.8),
                          fontSize: 12,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ],
                  ),
                ),
                const Icon(Icons.arrow_forward_ios_rounded, color: Colors.white54, size: 16),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
