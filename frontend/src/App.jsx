import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import Login from './pages/auth/Login';
import MainLayout from './layouts/MainLayout';

// ==========================================
// 1. SUPER ADMIN SUITE
// ==========================================
import SuperAdminDashboard from './pages/super-admin/Dashboard';
import HighwayStatusSuper from './pages/super-admin/HighwayStatusSuper';
import TrafficOverviewSuper from './pages/super-admin/TrafficOverviewSuper';
import StateAnalyticsSuper from './pages/super-admin/StateAnalyticsSuper';
import AIMonitoringSuper from './pages/super-admin/AIMonitoringSuper';
import RevenueReportsSuper from './pages/super-admin/RevenueReportsSuper';
import TrafficReportsSuper from './pages/super-admin/TrafficReportsSuper';
import EmergencyReportsSuper from './pages/super-admin/EmergencyReportsSuper';
import IncidentReportsSuper from './pages/super-admin/IncidentReportsSuper';
import UserListSuper from './pages/super-admin/UserListSuper';
import RolesPermissionsSuper from './pages/super-admin/RolesPermissionsSuper';
import AccessControlSuper from './pages/super-admin/AccessControlSuper';
import HighwayListSuper from './pages/super-admin/HighwayListSuper';
import TollOpsSuper from './pages/super-admin/TollOpsSuper';
import CCTVMonsSuper from './pages/super-admin/CCTVMonsSuper';
import RouteMonsSuper from './pages/super-admin/RouteMonsSuper';
import TrafficPredSuper from './pages/super-admin/TrafficPredSuper';
import AIDetectSuper from './pages/super-admin/AIDetectSuper';
import RiskAnalysisSuper from './pages/super-admin/RiskAnalysisSuper';
import ActiveEmergSuper from './pages/super-admin/ActiveEmergSuper';
import SOSMonSuper from './pages/super-admin/SOSMonSuper';
import DispatchCenterSuper from './pages/super-admin/DispatchCenterSuper';
import GovBrandingSuper from './pages/super-admin/GovBrandingSuper';
import SecuritySettingsSuper from './pages/super-admin/SecuritySettingsSuper';
import SystemConfigSuper from './pages/super-admin/SystemConfigSuper';

// ==========================================
// 2. HIGHWAY ADMIN SUITE
// ==========================================
import HighwayDashboard from './pages/highway-admin/HighwayDashboard';
import HighwayStatus from './pages/highway-admin/HighwayStatus';
import RouteMonitoring from './pages/highway-admin/RouteMonitoring';
import TrafficDensity from './pages/highway-admin/TrafficDensity';
import TollBoothsHW from './pages/highway-admin/TollBooths';
import LaneMonitoringHW from './pages/highway-admin/LaneMonitoring';
import RevenueTrackingHW from './pages/highway-admin/RevenueTracking';
import IncidentReportsHW from './pages/highway-admin/IncidentReports';
import SOSRequestsHW from './pages/highway-admin/SOSRequests';
import DispatchCoordinationHW from './pages/highway-admin/DispatchCoordination';
import DamageReportsHW from './pages/highway-admin/DamageReports';
import WorkOrdersHW from './pages/highway-admin/WorkOrders';
import MaintenanceTeamsHW from './pages/highway-admin/MaintenanceTeams';

// ==========================================
// 3. TOLL ADMIN SUITE
// ==========================================
import TollDashboard from './pages/toll-admin/TollDashboard';
import TollBooths from './pages/toll-admin/TollBooths';
import ActiveLanes from './pages/toll-admin/ActiveLanes';
import LaneStatusToll from './pages/toll-admin/LaneStatus';
import TollStaff from './pages/toll-admin/TollStaff';
import FASTagVerify from './pages/toll-admin/FASTagVerify';
import FailedTransactions from './pages/toll-admin/FailedTransactions';
import BlacklistedTags from './pages/toll-admin/BlacklistedTags';
import DailyCollection from './pages/toll-admin/DailyCollection';
import ShiftReports from './pages/toll-admin/ShiftReports';
import TransactionLog from './pages/toll-admin/TransactionLog';
import VehicleQueue from './pages/toll-admin/VehicleQueue';
import VehicleLogs from './pages/toll-admin/VehicleLogs';
import SuspiciousVehicles from './pages/toll-admin/SuspiciousVehicles';

// ==========================================
// 4. FASTAG ADMIN SUITE
// ==========================================
import FastagDashboard from './pages/fastag-admin/FastagDashboard';
import RegisteredTags from './pages/fastag-admin/RegisteredTags';
import BlacklistedTagsFT from './pages/fastag-admin/BlacklistedTagsFT';
import RechargeHistory from './pages/fastag-admin/RechargeHistory';
import SuccessfulTx from './pages/fastag-admin/SuccessfulTx';
import FailedTxFT from './pages/fastag-admin/FailedTxFT';
import PendingTx from './pages/fastag-admin/PendingTx';
import UsageStats from './pages/fastag-admin/UsageStats';
import RevenueAnalyticsFT from './pages/fastag-admin/RevenueAnalytics';
import VehicleTrendsFT from './pages/fastag-admin/VehicleTrends';

// ==========================================
// 5. VEHICLE MONITORING SUITE
// ==========================================
import VehicleDashboard from './pages/vehicle-admin/VehicleDashboard';
import LiveTracking from './pages/vehicle-admin/LiveTracking';
import VehicleHistory from './pages/vehicle-admin/VehicleHistory';
import GPSMonitoring from './pages/vehicle-admin/GPSMonitoring';
import ANPRDetection from './pages/vehicle-admin/ANPRDetection';
import OverspeedAlert from './pages/vehicle-admin/OverspeedAlert';
import BlacklistedVehicles from './pages/vehicle-admin/BlacklistedVehicles';
import VehicleDensity from './pages/vehicle-admin/VehicleDensity';
import TrafficTrendsVM from './pages/vehicle-admin/TrafficTrendsVM';
import SuspiciousActivity from './pages/vehicle-admin/SuspiciousActivity';

// ==========================================
// 6. TRAFFIC ANALYTICS SUITE
// ==========================================
import TrafficDashboard from './pages/traffic-admin/TrafficDashboard';
import TrafficDensityTA from './pages/traffic-admin/TrafficDensityTA';
import CongestionAnalysis from './pages/traffic-admin/CongestionAnalysis';
import PeakHourReports from './pages/traffic-admin/PeakHourReports';
import TrafficPredictionTA from './pages/traffic-admin/TrafficPredictionTA';
import RouteIntelligence from './pages/traffic-admin/RouteIntelligence';
import RiskZones from './pages/traffic-admin/RiskZones';
import TrafficReportsTA from './pages/traffic-admin/TrafficReportsTA';
import ComparisonAnalytics from './pages/traffic-admin/ComparisonAnalytics';
import Heatmaps from './pages/traffic-admin/Heatmaps';

// ==========================================
// 7. INCIDENT MANAGEMENT SUITE
// ==========================================
import IncidentDashboard from './pages/incident-admin/IncidentDashboard';
import AccidentReports from './pages/incident-admin/AccidentReportsIA';
import RoadBlockages from './pages/incident-admin/RoadBlockages';
import OfficialComplaints from './pages/incident-admin/OfficialComplaints';
import DispatchRequestsIA from './pages/incident-admin/DispatchRequestsIA';
import IncidentTimeline from './pages/incident-admin/IncidentTimeline';
import ResponseTracking from './pages/incident-admin/ResponseTracking';
import IncidentSummary from './pages/incident-admin/IncidentSummary';
import SeverityAnalysis from './pages/incident-admin/SeverityAnalysis';
import EmergencyAnalyticsIA from './pages/incident-admin/EmergencyAnalyticsIA';

// ==========================================
// 8. EMERGENCY SUPPORT SUITE
// ==========================================
import EmergencyDashboard from './pages/emergency-admin/EmergencyDashboard';
import SOSRequestsEA from './pages/emergency-admin/SOSRequestsEA';
import EmergencyQueue from './pages/emergency-admin/EmergencyQueue';
import DispatchCenterEA from './pages/emergency-admin/DispatchCenterEA';
import AmbulanceTracking from './pages/emergency-admin/AmbulanceTracking';
import PoliceSupport from './pages/emergency-admin/PoliceSupport';
import PatrolSupportEA from './pages/emergency-admin/PatrolSupportEA';
import EmergencySummaryEA from './pages/emergency-admin/EmergencySummaryEA';
import ResponseAnalyticsEA from './pages/emergency-admin/ResponseAnalyticsEA';

// ==========================================
// 9. ROAD MAINTENANCE SUITE
// ==========================================
import MaintenanceDashboard from './pages/maintenance-admin/MaintenanceDashboard';
import DamageReportsMT from './pages/maintenance-admin/DamageReportsMT';
import WorkOrdersMT from './pages/maintenance-admin/WorkOrdersMT';
import RepairTracking from './pages/maintenance-admin/RepairTracking';
import MaintenanceTeamsMT from './pages/maintenance-admin/MaintenanceTeamsMT';
import StaffAssignment from './pages/maintenance-admin/StaffAssignment';
import MaterialUsage from './pages/maintenance-admin/MaterialUsage';
import MaintenanceSummary from './pages/maintenance-admin/MaintenanceSummary';
import CostAnalytics from './pages/maintenance-admin/CostAnalytics';

// ==========================================
// 10. CCTV MONITORING SUITE
// ==========================================
import CCTVDashboard from './pages/cctv-admin/CCTVDashboard';
import LiveCCTV from './pages/cctv-admin/LiveCCTV';
import CameraGrid from './pages/cctv-admin/CameraGrid';
import MotionDetection from './pages/cctv-admin/MotionDetection';
import PlaybackCenter from './pages/cctv-admin/PlaybackCenter';
import SavedRecordings from './pages/cctv-admin/SavedRecordings';
import IncidentClips from './pages/cctv-admin/IncidentClips';
import CameraHealth from './pages/cctv-admin/CameraHealth';
import SurveillanceAnalytics from './pages/cctv-admin/SurveillanceAnalytics';

// ==========================================
// 11. ROUTE & LANE SUITE
// ==========================================
import RouteDashboard from './pages/route-admin/RouteDashboard';
import LaneStatusRoute from './pages/route-admin/LaneStatus';
import ClosedLanes from './pages/route-admin/ClosedLanes';
import SmartSignals from './pages/route-admin/SmartSignals';
import RouteDiversions from './pages/route-admin/RouteDiversions';
import TrafficRerouting from './pages/route-admin/TrafficRerouting';
import CongestionZones from './pages/route-admin/CongestionZones';
import RouteReports from './pages/route-admin/RouteReports';
import DensityAnalysisRT from './pages/route-admin/DensityAnalysisRT';

// ==========================================
// 12. CHALLAN & FINE SUITE
// ==========================================
import ChallanDashboard from './pages/challan-admin/ChallanDashboard';
import OverspeedCases from './pages/challan-admin/OverspeedCases';
import TollViolations from './pages/challan-admin/TollViolations';
import BlacklistedVehiclesCH from './pages/challan-admin/BlacklistedVehiclesCH';
import FineRecords from './pages/challan-admin/FineRecords';
import PendingPayments from './pages/challan-admin/PendingPayments';
import PaidChallans from './pages/challan-admin/PaidChallans';
import ViolationReportsCH from './pages/challan-admin/ViolationReportsCH';
import RevenueReportsCH from './pages/challan-admin/RevenueReportsCH';

// ==========================================
// 13. PATROL & FUEL SUITE
// ==========================================
import PatrolDashboard from './pages/patrol-admin/PatrolDashboard';
import PatrolGPS from './pages/patrol-admin/PatrolGPS';
import PatrolRoute from './pages/patrol-admin/PatrolRoute';
import PatrolLogs from './pages/patrol-admin/PatrolLogs';
import FuelLogs from './pages/patrol-admin/FuelLogs';
import FuelConsumption from './pages/patrol-admin/FuelConsumption';
import DriverReports from './pages/patrol-admin/DriverReports';
import IncidentSupportPT from './pages/patrol-admin/IncidentSupportPT';
import EmergencyPatrol from './pages/patrol-admin/EmergencyPatrol';

// ==========================================
// 14. REPORTS & ANALYTICS SUITE
// ==========================================
import ReportsDashboard from './pages/reports-admin/ReportsDashboard';
import RevenueReportsRA from './pages/reports-admin/RevenueReportsRA';
import TrafficReportsRA from './pages/reports-admin/TrafficReportsRA';
import IncidentReportsRA from './pages/reports-admin/IncidentReportsRA';
import AIAnalyticsRA from './pages/reports-admin/AIAnalyticsRA';
import PerformanceAnalytics from './pages/reports-admin/PerformanceAnalytics';
import ComparisonReports from './pages/reports-admin/ComparisonReports';
import PDFExport from './pages/reports-admin/PDFExport';
import ExcelExport from './pages/reports-admin/ExcelExport';

// ==========================================
// 15. CONTROL ROOM SUITE
// ==========================================
import ControlDashboard from './pages/control-admin/ControlDashboard';
import TrafficIntelligence from './pages/control-admin/TrafficIntelligence';
import LiveHighwayMap from './pages/control-admin/LiveHighwayMap';
import CCTVWall from './pages/control-admin/CCTVWall';
import NationalAlerts from './pages/control-admin/NationalAlerts';
import SOSMonitoringCR from './pages/control-admin/SOSMonitoringCR';
import IncidentCenterCR from './pages/control-admin/IncidentCenterCR';
import AIDetectionCR from './pages/control-admin/AIDetectionCR';
import TrafficPredictionCR from './pages/control-admin/TrafficPredictionCR';
import SmartAnalyticsCR from './pages/control-admin/SmartAnalyticsCR';

// ==========================================
// 16. EMPLOYEE MANAGEMENT SUITE
// ==========================================
import EmployeeDashboard from './pages/employee-admin/EmployeeDashboard';
import EmployeeList from './pages/employee-admin/EmployeeList';
import StaffAttendance from './pages/employee-admin/StaffAttendance';
import ShiftManagement from './pages/employee-admin/ShiftManagement';
import StaffRoles from './pages/employee-admin/StaffRoles';
import AccessControlEP from './pages/employee-admin/AccessControlEP';
import StaffActivityLogs from './pages/employee-admin/StaffActivityLogs';
import StaffPayroll from './pages/employee-admin/StaffPayroll';
import StaffPerformance from './pages/employee-admin/StaffPerformance';

// ==========================================
// 17. PUBLIC PORTAL SUITE
// ==========================================
import PublicDashboard from './pages/public-portal/PublicDashboard';
import TollCalculator from './pages/public-portal/TollCalculator';
import PublicTraffic from './pages/public-portal/PublicTraffic';
import PublicEmergency from './pages/public-portal/PublicEmergency';
import FileComplaint from './pages/public-portal/FileComplaint';
import ComplaintStatus from './pages/public-portal/ComplaintStatus';
import PublicReports from './pages/public-portal/PublicReports';
import HighwayNotices from './pages/public-portal/HighwayNotices';
import SafetyGuidelines from './pages/public-portal/SafetyGuidelines';

// Shared
import Settings from './pages/settings/Settings';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/super-admin" replace />} />
        
        {/* Super Admin Section */}
        <Route path="super-admin">
          <Route index element={<SuperAdminDashboard />} />
          <Route path="highway-status" element={<HighwayStatusSuper />} />
          <Route path="traffic-overview" element={<TrafficOverviewSuper />} />
          <Route path="state-analytics" element={<StateAnalyticsSuper />} />
          <Route path="ai-monitoring" element={<AIMonitoringSuper />} />
          <Route path="revenue-reports" element={<RevenueReportsSuper />} />
          <Route path="traffic-reports" element={<TrafficReportsSuper />} />
          <Route path="emergency-reports" element={<EmergencyReportsSuper />} />
          <Route path="incident-reports" element={<IncidentReportsSuper />} />
          <Route path="users" element={<UserListSuper />} />
          <Route path="roles" element={<RolesPermissionsSuper />} />
          <Route path="access" element={<AccessControlSuper />} />
          <Route path="highways" element={<HighwayListSuper />} />
          <Route path="tolls" element={<TollOpsSuper />} />
          <Route path="cctv" element={<CCTVMonsSuper />} />
          <Route path="routes" element={<RouteMonsSuper />} />
          <Route path="ai-traffic" element={<TrafficPredSuper />} />
          <Route path="ai-detect" element={<AIDetectSuper />} />
          <Route path="ai-risk" element={<RiskAnalysisSuper />} />
          <Route path="active-emerg" element={<ActiveEmergSuper />} />
          <Route path="sos-mon" element={<SOSMonSuper />} />
          <Route path="dispatch" element={<DispatchCenterSuper />} />
          <Route path="branding" element={<GovBrandingSuper />} />
          <Route path="security" element={<SecuritySettingsSuper />} />
          <Route path="config" element={<SystemConfigSuper />} />
        </Route>

        {/* Highway Admin Section */}
        <Route path="highway-admin">
          <Route path="dashboard" element={<HighwayDashboard />} />
          <Route path="status" element={<HighwayStatus />} />
          <Route path="route" element={<RouteMonitoring />} />
          <Route path="density" element={<TrafficDensity />} />
          <Route path="toll-booths" element={<TollBoothsHW />} />
          <Route path="lanes" element={<LaneMonitoringHW />} />
          <Route path="revenue" element={<RevenueTrackingHW />} />
          <Route path="incidents" element={<IncidentReportsHW />} />
          <Route path="sos" element={<SOSRequestsHW />} />
          <Route path="dispatch" element={<DispatchCoordinationHW />} />
          <Route path="damage" element={<DamageReportsHW />} />
          <Route path="work-orders" element={<WorkOrdersHW />} />
          <Route path="teams" element={<MaintenanceTeamsHW />} />
        </Route>

        {/* Toll Admin Section */}
        <Route path="toll-admin">
          <Route path="dashboard" element={<TollDashboard />} />
          <Route path="booths" element={<TollBooths />} />
          <Route path="active-lanes" element={<ActiveLanes />} />
          <Route path="lane-status" element={<LaneStatusToll />} />
          <Route path="staff" element={<TollStaff />} />
          <Route path="fastag-verify" element={<FASTagVerify />} />
          <Route path="failed-tx" element={<FailedTransactions />} />
          <Route path="blacklist" element={<BlacklistedTags />} />
          <Route path="collection" element={<DailyCollection />} />
          <Route path="shift-reports" element={<ShiftReports />} />
          <Route path="tx-logs" element={<TransactionLog />} />
          <Route path="queue" element={<VehicleQueue />} />
          <Route path="vehicle-logs" element={<VehicleLogs />} />
          <Route path="suspicious" element={<SuspiciousVehicles />} />
        </Route>

        {/* FASTag Admin Section */}
        <Route path="fastag-admin">
          <Route path="dashboard" element={<FastagDashboard />} />
          <Route path="registered" element={<RegisteredTags />} />
          <Route path="blacklist" element={<BlacklistedTagsFT />} />
          <Route path="recharges" element={<RechargeHistory />} />
          <Route path="success-tx" element={<SuccessfulTx />} />
          <Route path="failed-tx" element={<FailedTxFT />} />
          <Route path="pending-tx" element={<PendingTx />} />
          <Route path="usage" element={<UsageStats />} />
          <Route path="revenue" element={<RevenueAnalyticsFT />} />
          <Route path="trends" element={<VehicleTrendsFT />} />
        </Route>

        {/* Vehicle Monitoring Admin Section */}
        <Route path="vehicle-admin">
          <Route path="dashboard" element={<VehicleDashboard />} />
          <Route path="live" element={<LiveTracking />} />
          <Route path="history" element={<VehicleHistory />} />
          <Route path="gps" element={<GPSMonitoring />} />
          <Route path="anpr" element={<ANPRDetection />} />
          <Route path="overspeed" element={<OverspeedAlert />} />
          <Route path="blacklist" element={<BlacklistedVehicles />} />
          <Route path="density" element={<VehicleDensity />} />
          <Route path="trends" element={<TrafficTrendsVM />} />
          <Route path="suspicious" element={<SuspiciousActivity />} />
        </Route>

        {/* Traffic Analytics Admin Section */}
        <Route path="traffic-admin">
          <Route path="dashboard" element={<TrafficDashboard />} />
          <Route path="density" element={<TrafficDensityTA />} />
          <Route path="congestion" element={<CongestionAnalysis />} />
          <Route path="peak-hours" element={<PeakHourReports />} />
          <Route path="prediction" element={<TrafficPredictionTA />} />
          <Route path="route-intel" element={<RouteIntelligence />} />
          <Route path="risk-zones" element={<RiskZones />} />
          <Route path="reports" element={<TrafficReportsTA />} />
          <Route path="comparison" element={<ComparisonAnalytics />} />
          <Route path="heatmaps" element={<Heatmaps />} />
        </Route>

        {/* Incident Management Admin Section */}
        <Route path="incident-admin">
          <Route path="dashboard" element={<IncidentDashboard />} />
          <Route path="accidents" element={<AccidentReports />} />
          <Route path="blockages" element={<RoadBlockages />} />
          <Route path="complaints" element={<OfficialComplaints />} />
          <Route path="dispatch" element={<DispatchRequestsIA />} />
          <Route path="timeline" element={<IncidentTimeline />} />
          <Route path="response" element={<ResponseTracking />} />
          <Route path="reports" element={<IncidentSummary />} />
          <Route path="severity" element={<SeverityAnalysis />} />
          <Route path="analytics" element={<EmergencyAnalyticsIA />} />
        </Route>

        {/* Emergency Support Admin Section */}
        <Route path="emergency-admin">
          <Route path="dashboard" element={<EmergencyDashboard />} />
          <Route path="sos" element={<SOSRequestsEA />} />
          <Route path="queue" element={<EmergencyQueue />} />
          <Route path="dispatch" element={<DispatchCenterEA />} />
          <Route path="ambulance" element={<AmbulanceTracking />} />
          <Route path="police" element={<PoliceSupport />} />
          <Route path="patrol" element={<PatrolSupportEA />} />
          <Route path="reports" element={<EmergencySummaryEA />} />
          <Route path="analytics" element={<ResponseAnalyticsEA />} />
        </Route>

        {/* Road Maintenance Admin Section */}
        <Route path="maintenance-admin">
          <Route path="dashboard" element={<MaintenanceDashboard />} />
          <Route path="damage" element={<DamageReportsMT />} />
          <Route path="work-orders" element={<WorkOrdersMT />} />
          <Route path="tracking" element={<RepairTracking />} />
          <Route path="teams" element={<MaintenanceTeamsMT />} />
          <Route path="assignments" element={<StaffAssignment />} />
          <Route path="materials" element={<MaterialUsage />} />
          <Route path="reports" element={<MaintenanceSummary />} />
          <Route path="costs" element={<CostAnalytics />} />
        </Route>

        {/* CCTV Monitoring Admin Section */}
        <Route path="cctv-admin">
          <Route path="dashboard" element={<CCTVDashboard />} />
          <Route path="live" element={<LiveCCTV />} />
          <Route path="grid" element={<CameraGrid />} />
          <Route path="motion" element={<MotionDetection />} />
          <Route path="playback" element={<PlaybackCenter />} />
          <Route path="saved" element={<SavedRecordings />} />
          <Route path="clips" element={<IncidentClips />} />
          <Route path="health" element={<CameraHealth />} />
          <Route path="analytics" element={<SurveillanceAnalytics />} />
        </Route>

        {/* Route Admin Section */}
        <Route path="route-admin">
          <Route path="dashboard" element={<RouteDashboard />} />
          <Route path="lanes" element={<LaneStatusRoute />} />
          <Route path="closed" element={<ClosedLanes />} />
          <Route path="signals" element={<SmartSignals />} />
          <Route path="diversions" element={<RouteDiversions />} />
          <Route path="reroute" element={<TrafficRerouting />} />
          <Route path="congestion" element={<CongestionZones />} />
          <Route path="reports" element={<RouteReports />} />
          <Route path="density" element={<DensityAnalysisRT />} />
        </Route>

        {/* Challan Admin Section */}
        <Route path="challan-admin">
          <Route path="dashboard" element={<ChallanDashboard />} />
          <Route path="overspeed" element={<OverspeedCases />} />
          <Route path="toll-viol" element={<TollViolations />} />
          <Route path="blacklist" element={<BlacklistedVehiclesCH />} />
          <Route path="fines" element={<FineRecords />} />
          <Route path="pending" element={<PendingPayments />} />
          <Route path="paid" element={<PaidChallans />} />
          <Route path="viol-reports" element={<ViolationReportsCH />} />
          <Route path="revenue" element={<RevenueReportsCH />} />
        </Route>

        {/* Patrol Admin Section */}
        <Route path="patrol-admin">
          <Route path="dashboard" element={<PatrolDashboard />} />
          <Route path="gps" element={<PatrolGPS />} />
          <Route path="route" element={<PatrolRoute />} />
          <Route path="logs" element={<PatrolLogs />} />
          <Route path="fuel-logs" element={<FuelLogs />} />
          <Route path="consumption" element={<FuelConsumption />} />
          <Route path="drivers" element={<DriverReports />} />
          <Route path="support" element={<IncidentSupportPT />} />
          <Route path="emergency" element={<EmergencyPatrol />} />
        </Route>

        {/* Reports Admin Section */}
        <Route path="reports-admin">
          <Route path="dashboard" element={<ReportsDashboard />} />
          <Route path="revenue" element={<RevenueReportsRA />} />
          <Route path="traffic" element={<TrafficReportsRA />} />
          <Route path="incidents" element={<IncidentReportsRA />} />
          <Route path="ai" element={<AIAnalyticsRA />} />
          <Route path="performance" element={<PerformanceAnalytics />} />
          <Route path="comparison" element={<ComparisonReports />} />
          <Route path="pdf" element={<PDFExport />} />
          <Route path="excel" element={<ExcelExport />} />
        </Route>

        {/* Control Room Admin Section */}
        <Route path="control-admin">
          <Route path="dashboard" element={<ControlDashboard />} />
          <Route path="traffic" element={<TrafficIntelligence />} />
          <Route path="map" element={<LiveHighwayMap />} />
          <Route path="cctv" element={<CCTVWall />} />
          <Route path="alerts" element={<NationalAlerts />} />
          <Route path="sos" element={<SOSMonitoringCR />} />
          <Route path="incident" element={<IncidentCenterCR />} />
          <Route path="ai-detect" element={<AIDetectionCR />} />
          <Route path="ai-traffic" element={<TrafficPredictionCR />} />
          <Route path="analytics" element={<SmartAnalyticsCR />} />
        </Route>

        {/* Employee Management Admin Section */}
        <Route path="employee-admin">
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="list" element={<EmployeeList />} />
          <Route path="attendance" element={<StaffAttendance />} />
          <Route path="shifts" element={<ShiftManagement />} />
          <Route path="roles" element={<StaffRoles />} />
          <Route path="access" element={<AccessControlEP />} />
          <Route path="logs" element={<StaffActivityLogs />} />
          <Route path="payroll" element={<StaffPayroll />} />
          <Route path="performance" element={<StaffPerformance />} />
        </Route>

        {/* Public Portal Section */}
        <Route path="public-portal">
          <Route path="dashboard" element={<PublicDashboard />} />
          <Route path="toll-calc" element={<TollCalculator />} />
          <Route path="traffic" element={<PublicTraffic />} />
          <Route path="emergency" element={<PublicEmergency />} />
          <Route path="file-complaint" element={<FileComplaint />} />
          <Route path="status" element={<ComplaintStatus />} />
          <Route path="reports" element={<PublicReports />} />
          <Route path="notices" element={<HighwayNotices />} />
          <Route path="safety" element={<SafetyGuidelines />} />
        </Route>

        <Route path="settings" element={<Settings />} />

        <Route path="*" element={
          <div className="flex flex-col items-center justify-center h-full p-12 text-center bg-[#f8fafc] relative overflow-hidden">
             {/* Security Grid Background */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"></div>
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.95, y: 30 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ type: 'spring', damping: 20, stiffness: 100 }}
               className="enterprise-card max-w-[500px] w-full relative z-10 flex flex-col items-center shadow-[rgba(0,0,0,0.4)_0px_30px_60px_-15px]"
             >
                <div className="w-28 h-28 bg-rose-50 rounded-[32px] flex items-center justify-center mb-10 border border-rose-100 shadow-master relative group">
                   <ShieldAlert size={56} className="text-rose-500 animate-pulse" />
                   <div className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-2">
                   Security Protocol:
                </h2>
                <span className="text-xl font-black text-rose-600 uppercase tracking-widest bg-rose-50 px-4 py-1.5 rounded-full border border-rose-100">
                   Module Offline
                </span>
                
                <div className="h-1 w-16 bg-slate-100 rounded-full my-8"></div>
                
                <p className="text-slate-500 text-[12px] font-bold uppercase tracking-[0.15em] leading-relaxed mb-12 max-w-[340px]">
                   The requested intelligence module is currently under maintenance or has not been provisioned for your clearance level.
                </p>
                
                <div className="grid grid-cols-2 gap-6 w-full">
                   <motion.button 
                     whileHover={{ y: -5, scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     onClick={() => window.history.back()} 
                     className="btn-secondary w-full py-4 !rounded-2xl"
                   >
                      Back to Ops
                   </motion.button>
                   <motion.button 
                     whileHover={{ y: -5, scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     onClick={() => window.location.href = '/login'} 
                     className="btn-premium bg-slate-900 text-white w-full py-4 !rounded-2xl"
                   >
                      Re-Authenticate
                   </motion.button>
                </div>
             </motion.div>
             
             {/* Decorative Elements */}
             <div className="absolute bottom-12 left-12 flex items-center gap-4 text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] opacity-40">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                System Lockdown Active
             </div>
             <div className="absolute top-12 right-12 text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] opacity-40">
                Code: 403_RESTRICTED_ACCESS
             </div>
          </div>
        } />
      </Route>
    </Routes>
  );
}

export default App;
