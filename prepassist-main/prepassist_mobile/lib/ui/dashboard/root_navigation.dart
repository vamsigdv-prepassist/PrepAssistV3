import 'package:flutter/material.dart';
import 'home_screen.dart';
import '../ai/ai_mentor_screen.dart';

class NativeRootNavigator extends StatefulWidget {
  const NativeRootNavigator({super.key});

  @override
  State<NativeRootNavigator> createState() => _NativeRootNavigatorState();
}

class _NativeRootNavigatorState extends State<NativeRootNavigator> {
  int _currentIndex = 0;

  final List<Widget> _screens = [
    const NativeHomeScreen(),
    const NativeAIMentorScreen(),
    const Center(child: Text('Cloud Vault Mapping Native')),
    const Center(child: Text('Native Identity Matrix')),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: _screens,
      ),
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.05),
              blurRadius: 20,
              offset: const Offset(0, -5),
            )
          ]
        ),
        child: BottomNavigationBar(
          currentIndex: _currentIndex,
          onTap: (index) {
            setState(() {
              _currentIndex = index;
            });
          },
          backgroundColor: Colors.white,
          type: BottomNavigationBarType.fixed,
          selectedItemColor: Colors.indigoAccent,
          unselectedItemColor: Colors.grey.shade400,
          showSelectedLabels: true,
          showUnselectedLabels: false,
          elevation: 0,
          selectedLabelStyle: const TextStyle(fontWeight: FontWeight.w800, fontSize: 10, letterSpacing: 0.5),
          items: const [
            BottomNavigationBarItem(
              icon: Icon(Icons.dashboard_rounded),
              label: 'DASHBOARD',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.bolt_rounded),
              label: 'MENTOR',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.folder_shared_rounded),
              label: 'VAULT',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.person_pin_rounded),
              label: 'ACCOUNT',
            ),
          ],
        ),
      ),
    );
  }
}
