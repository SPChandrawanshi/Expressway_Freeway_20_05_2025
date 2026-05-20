# Master Development Rules File
## Smart Expressway & Freeway Management System

### 1. GLOBAL PROJECT RULES
- **Unique Dashboards**: Every dashboard must look different; no repeated layouts.
- **Enterprise UI**: Professional government-grade UI with smooth animations and proper spacing.
- **Responsive**: Fully responsive (Mobile-first, Tablet, Desktop, Ultra-Wide).
- **Code**: Clean architecture, reusable components, Tailwind utility classes only (no inline CSS).

### 2. COLOR & STYLE RULES
- **Backgrounds**: Main: `#0f172a` | Sidebar: `#111827` | Card: `#1e293b`.
- **Accents**: Primary: `#2563eb` | Hover Border: `#6D214F`.
- **Text**: Primary: `#f8fafc` | Muted: `#94a3b8`.
- **Shadows**: `box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;` (Applied to cards, buttons, modals, etc.).
- **Borders**: `rounded-xl`, `rounded-2xl`, `rounded-3xl`. Hover: `border-[#6D214F]`.

### 3. COMPONENT RULES
- **Buttons**: Must include hover, active, loading, and disabled states. Padding: `px-5 py-3` or `px-6 py-3`.
- **Cards**: Must have rounded corners, soft shadows, hover animations (`scale-[1.02]`, `-translate-y-1`), and status indicators.
- **Sidebar**: Dark glassmorphism. Width: 280px (expanded), 90px (collapsed). Must include Govt logos and smooth animations.
- **Header**: Height 80px. Includes branding, notifications, user profile, emergency alerts, and live clock.
- **Tables**: Sticky headers, search, pagination, export options, and row hover effects (`bg-slate-800`).
- **Forms**: Floating labels, focus animations (`border-[#6D214F]`), and validation support.

### 4. ANIMATION & DATA RULES
- **Framer Motion**: Use for page transitions, sidebar, modals, card hover, and loading screens.
- **Charts**: Smooth animations, tooltips, and live update capability. Includes Revenue, Traffic, Heatmaps, and AI predictions.
- **Maps**: Live tracking, route layers, traffic heatmaps, and patrol tracking markers.

### 5. SECURITY & PERFORMANCE
- **Security**: JWT Auth, RBAC, Protected Routes, API validation.
- **Performance**: Lazy loading, route splitting, image optimization, and table virtualization.

### 6. FINAL UI FEEL
The system must feel like a **Smart City Command Center** or **National Highway Monitoring Platform**.

> **MASTER RULE**: Never build a basic admin panel or generic template. Always aim for an enterprise-level, highly polished, real-time command center experience.
