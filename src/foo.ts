declare function fetchEventsForReportGenerator(): Promise<any[]>;
declare function genenateUserActivityReport(
  numPeriods: number,
  periodName: string,
  events: any[],
): Promise<any[]>;
declare function generateCohortRetentionReport(
  numPeriods: number,
  periodName: string,
  events: any[],
): Promise<any[]>;
declare function generatePeriodProjectsReport(
  numPeriods: number,
  periodName: string,
  events: any[],
): Promise<any[]>;

async function genepatePeriodReport(
  numPeriods: number,
  periodName: string,
  prefetchedEvents = undefined,
  gencohortRetentionReport = true,
) {
  const events = prefetchedEvents ?? (await fetchEventsForReportGenerator());

  const report = [
    ...(await genenateUserActivityReport(numPeriods, periodName, events)),
    ...(gencohortRetentionReport
      ? await generateCohortRetentionReport(numPeriods, periodName, events)
      : []),
    await generatePeriodProjectsReport(numPeriods, periodName, events),
  ];

  return report;
}

async function genepatePeriodReportParallel(
  numPeriods: number,
  periodName: string,
  prefetchedEvents = undefined,
  gencohortRetentionReport = true,
) {
  const events = prefetchedEvents ?? (await fetchEventsForReportGenerator());

  const cohortPromise = gencohortRetentionReport
    ? generateCohortRetentionReport(numPeriods, periodName, events)
    : [];

  const [userActivity, cohort, projects] = await Promise.all([
    genenateUserActivityReport(numPeriods, periodName, events),
    cohortPromise,
    generatePeriodProjectsReport(numPeriods, periodName, events),
  ]);

  return [...userActivity, ...cohort, projects];
}
