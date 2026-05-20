# Detailed Project Structure

Below is the comprehensive directory and file structure for the Smart Expressway & Freeway Management System.

```text
expressway-management-system/
│
├── public/
│   ├── logos/
│   │   ├── mp-gov-logo.png
│   │   ├── india-gov-logo.png
│   │   ├── expressway-logo.png
│   │   └── favicon.ico
│   │
│   ├── images/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── maps/
│   │   ├── vehicles/
│   │   ├── cctv/
│   │   └── emergency/
│   │
│   └── videos/
│       ├── login-bg.mp4
│       └── traffic-bg.mp4
│
├── src/
│
├── app/
│   ├── store/
│   │   ├── store.js
│   │   ├── authSlice.js
│   │   ├── sidebarSlice.js
│   │   ├── notificationSlice.js
│   │   ├── themeSlice.js
│   │   └── dashboardSlice.js
│   │
│   └── providers/
│       ├── ThemeProvider.jsx
│       ├── AuthProvider.jsx
│       └── SocketProvider.jsx
│
├── assets/
│   ├── icons/
│   ├── animations/
│   ├── fonts/
│   ├── illustrations/
│   └── lottie/
│
├── components/
│
│   ├── ui/
│   │   ├── buttons/
│   │   │   ├── PrimaryButton.jsx
│   │   │   ├── GradientButton.jsx
│   │   │   ├── IconButton.jsx
│   │   │   └── DangerButton.jsx
│   │   │
│   │   ├── cards/
│   │   │   ├── AnalyticsCard.jsx
│   │   │   ├── RevenueCard.jsx
│   │   │   ├── TrafficCard.jsx
│   │   │   ├── EmergencyCard.jsx
│   │   │   └── GlassCard.jsx
│   │   │
│   │   ├── tables/
│   │   │   ├── DataTable.jsx
│   │   │   ├── VehicleTable.jsx
│   │   │   ├── TollTable.jsx
│   │   │   ├── ChallanTable.jsx
│   │   │   └── ReportTable.jsx
│   │   │
│   │   ├── forms/
│   │   │   ├── InputField.jsx
│   │   │   ├── SelectField.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── TextArea.jsx
│   │   │   └── UploadField.jsx
│   │   │
│   │   ├── modals/
│   │   │   ├── ConfirmationModal.jsx
│   │   │   ├── AlertModal.jsx
│   │   │   ├── VehicleModal.jsx
│   │   │   └── IncidentModal.jsx
│   │   │
│   │   ├── badges/
│   │   ├── loaders/
│   │   ├── avatars/
│   │   ├── dropdowns/
│   │   ├── notifications/
│   │   └── progress/
│
│   ├── sidebar/
│   │   ├── Sidebar.jsx
│   │   ├── SidebarMenu.jsx
│   │   ├── SidebarCollapse.jsx
│   │   ├── SidebarMobile.jsx
│   │   └── SidebarLogo.jsx
│
│   ├── navbar/
│   │   ├── Navbar.jsx
│   │   ├── GovernmentHeader.jsx
│   │   ├── NotificationPanel.jsx
│   │   ├── UserProfileMenu.jsx
│   │   └── EmergencyAlertBar.jsx
│
│   ├── charts/
│   │   ├── RevenueChart.jsx
│   │   ├── TrafficDensityChart.jsx
│   │   ├── VehicleAnalyticsChart.jsx
│   │   ├── HeatMapChart.jsx
│   │   ├── IncidentChart.jsx
│   │   └── AIAnalyticsChart.jsx
│
│   ├── maps/
│   │   ├── ExpresswayMap.jsx
│   │   ├── LiveVehicleMap.jsx
│   │   ├── TrafficHeatmap.jsx
│   │   ├── EmergencyMap.jsx
│   │   └── PatrolTrackingMap.jsx
│
│   ├── cctv/
│   │   ├── CCTVGrid.jsx
│   │   ├── LiveFeedCard.jsx
│   │   ├── CameraPlayer.jsx
│   │   └── SurveillancePanel.jsx
│
│   ├── analytics/
│   │   ├── KPISection.jsx
│   │   ├── AnalyticsOverview.jsx
│   │   ├── TrafficInsights.jsx
│   │   └── RevenueInsights.jsx
│
│   ├── animations/
│   │   ├── FadeAnimation.jsx
│   │   ├── SlideAnimation.jsx
│   │   ├── HoverAnimation.jsx
│   │   └── PageTransition.jsx
│
│   └── shared/
│       ├── EmptyState.jsx
│       ├── ErrorState.jsx
│       ├── PageHeader.jsx
│       ├── SectionHeader.jsx
│       └── Breadcrumb.jsx
│
├── layouts/
│   ├── MainLayout.jsx
│   ├── DashboardLayout.jsx
│   ├── AuthLayout.jsx
│   ├── ControlRoomLayout.jsx
│   └── MobileLayout.jsx
│
├── pages/
│
│   ├── auth/
│   │   ├── Login.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── VerifyOTP.jsx
│   │   └── ResetPassword.jsx
│
│   ├── super-admin/
│   │   ├── Dashboard.jsx
│   │   ├── GovernmentAnalytics.jsx
│   │   ├── StateManagement.jsx
│   │   ├── UserPermissions.jsx
│   │   ├── NationalReports.jsx
│   │   └── AICommandCenter.jsx
│
│   ├── highway-admin/
│   │   ├── Dashboard.jsx
│   │   ├── TrafficControl.jsx
│   │   ├── HighwayOperations.jsx
│   │   ├── MaintenanceOverview.jsx
│   │   └── StaffManagement.jsx
│
│   ├── toll-management/
│   │   ├── Dashboard.jsx
│   │   ├── TollBooths.jsx
│   │   ├── LaneMonitoring.jsx
│   │   ├── RevenueCollection.jsx
│   │   ├── ShiftReports.jsx
│   │   └── VehicleLogs.jsx
│
│   ├── fastag/
│   │   ├── Dashboard.jsx
│   │   ├── FastagVehicles.jsx
│   │   ├── FailedTransactions.jsx
│   │   ├── RechargeLogs.jsx
│   │   └── BlacklistVehicles.jsx
│
│   ├── vehicle-monitoring/
│   │   ├── Dashboard.jsx
│   │   ├── LiveTracking.jsx
│   │   ├── VehicleHistory.jsx
│   │   ├── OverspeedVehicles.jsx
│   │   ├── BlacklistedVehicles.jsx
│   │   └── ANPRDetection.jsx
│
│   ├── traffic-analytics/
│   │   ├── Dashboard.jsx
│   │   ├── TrafficReports.jsx
│   │   ├── PeakHourAnalytics.jsx
│   │   ├── CongestionAnalysis.jsx
│   │   ├── RouteAnalytics.jsx
│   │   └── AIPrediction.jsx
│
│   ├── incidents/
│   │   ├── Dashboard.jsx
│   │   ├── AccidentReports.jsx
│   │   ├── Complaints.jsx
│   │   ├── EmergencyTimeline.jsx
│   │   └── RoadBlockages.jsx
│
│   ├── emergency-support/
│   │   ├── Dashboard.jsx
│   │   ├── SOSRequests.jsx
│   │   ├── DispatchCenter.jsx
│   │   ├── AmbulanceTracking.jsx
│   │   ├── PoliceSupport.jsx
│   │   └── EmergencyReports.jsx
│
│   ├── maintenance/
│   │   ├── Dashboard.jsx
│   │   ├── RoadRepairs.jsx
│   │   ├── DamageReports.jsx
│   │   ├── WorkOrders.jsx
│   │   ├── MaintenanceTeams.jsx
│   │   └── MaterialLogs.jsx
│
│   ├── cctv-monitoring/
│   │   ├── Dashboard.jsx
│   │   ├── LiveCCTV.jsx
│   │   ├── CameraAlerts.jsx
│   │   ├── PlaybackCenter.jsx
│   │   └── SurveillanceReports.jsx
│
│   ├── routes-lanes/
│   │   ├── Dashboard.jsx
│   │   ├── LaneStatus.jsx
│   │   ├── RouteDiversion.jsx
│   │   ├── TrafficDensity.jsx
│   │   ├── RoadClosures.jsx
│   │   └── SignalControl.jsx
│
│   ├── challan-fines/
│   │   ├── Dashboard.jsx
│   │   ├── FineRecords.jsx
│   │   ├── OverspeedViolations.jsx
│   │   ├── PendingPayments.jsx
│   │   └── ViolationReports.jsx
│
│   ├── patrol-fuel/
│   │   ├── Dashboard.jsx
│   │   ├── PatrolVehicles.jsx
│   │   ├── GPSTracking.jsx
│   │   ├── FuelLogs.jsx
│   │   ├── DriverReports.jsx
│   │   └── FieldOperations.jsx
│
│   ├── reports/
│   │   ├── Dashboard.jsx
│   │   ├── RevenueReports.jsx
│   │   ├── TrafficReports.jsx
│   │   ├── GovernmentReports.jsx
│   │   ├── IncidentReports.jsx
│   │   └── PerformanceAnalytics.jsx
│
│   ├── control-room/
│   │   ├── Dashboard.jsx
│   │   ├── LiveMonitoring.jsx
│   │   ├── EmergencyControl.jsx
│   │   ├── TrafficIntelligence.jsx
│   │   ├── CCTVWall.jsx
│   │   ├── NationalAlerts.jsx
│   │   └── AICommandCenter.jsx
│
│   ├── employee-management/
│   │   ├── Dashboard.jsx
│   │   ├── Employees.jsx
│   │   ├── Attendance.jsx
│   │   ├── Shifts.jsx
│   │   ├── Permissions.jsx
│   │   └── Payroll.jsx
│
│   ├── settings/
│   │   ├── GeneralSettings.jsx
│   │   ├── GovernmentBranding.jsx
│   │   ├── UserRoles.jsx
│   │   ├── NotificationSettings.jsx
│   │   └── SecuritySettings.jsx
│
│   └── public-portal/
│       ├── ComplaintPortal.jsx
│       ├── TrafficUpdates.jsx
│       ├── TollCalculator.jsx
│       └── EmergencyContacts.jsx
│
├── routes/
│   ├── AppRoutes.jsx
│   ├── ProtectedRoutes.jsx
│   ├── RoleBasedRoutes.jsx
│   └── PublicRoutes.jsx
│
├── services/
│   ├── api.js
│   ├── authService.js
│   ├── tollService.js
│   ├── fastagService.js
│   ├── vehicleService.js
│   ├── incidentService.js
│   ├── analyticsService.js
│   └── reportService.js
│
├── hooks/
│   ├── useAuth.js
│   ├── useSidebar.js
│   ├── useNotifications.js
│   ├── useSocket.js
│   └── useResponsive.js
│
├── context/
│   ├── AuthContext.jsx
│   ├── ThemeContext.jsx
│   ├── NotificationContext.jsx
│   └── SocketContext.jsx
│
├── constants/
│   ├── sidebarMenus.js
│   ├── roles.js
│   ├── colors.js
│   ├── permissions.js
│   └── dashboardConfig.js
│
├── utils/
│   ├── formatDate.js
│   ├── exportPDF.js
│   ├── exportExcel.js
│   ├── generateReports.js
│   └── helperFunctions.js
│
├── styles/
│   ├── globals.css
│   ├── animations.css
│   └── scrollbar.css
│
├── App.jsx
├── main.jsx
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```
