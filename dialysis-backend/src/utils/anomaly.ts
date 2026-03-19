export const detectAnomalies = (data: any) => {
  const anomalies: string[] = [];

  const weightGain = data.preWeight - data.postWeight;

  // Assumption: >2.5kg change is risky
  if (weightGain > 2.5) {
    anomalies.push("Excess Interdialytic Weight Change (>2.5kg)");
  }

  // High BP threshold
  if (data.systolicBP > 180) {
    anomalies.push("High Post-Dialysis BP (>180 mmHg)");
  }

  // Duration abnormal
  if (data.duration < 120 || data.duration > 300) {
    anomalies.push("Abnormal Session Duration (<120 or >300 mins)");
  }

  return anomalies;
};