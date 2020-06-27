type ITunesResponse = {
  screenshotUrls: string[];
  ipadScreenshotUrls: string[];
  appletvScreenshotUrls: string[];
  artworkUrl60: string;
  artworkUrl512: string;
  artworkUrl100: string;
  artistViewUrl: string;
  supportedDevices: string[];
  advisories: string[];
  isGameCenterEnabled: string[];
  features: string[];
  kind: string;
  trackCensoredName: string;
  languageCodesISO2A: string[];
  fileSizeBytes: string;
  contentAdvisoryRating: string;
  averageUserRatingForCurrentVersion: number;
  userRatingCountForCurrentVersion: number;
  averageUserRating: number;
  trackViewUrl: string;
  trackContentRating: string;
  isVppDeviceBasedLicensingEnabled: boolean;
  trackId: number;
  trackName: string;
  releaseDate: string;
  genreIds: string[];
  formattedPrice: string;
  primaryGenreName: string;
  minimumOsVersion: string;
  currentVersionReleaseDate: string;
  releaseNotes: string;
  primaryGenreId: number;
  sellerName: string;
  currency: string;
  description: string;
  artistId: number;
  artistName: string;
  genres: string[];
  price: number;
  bundleId: string;
  version: string;
  wrapperType: string;
  userRatingCount: number;
};

type PromptUserOptions = {
  title?: string;
  message?: string;
  buttonUpgradeText?: string;
  buttonCancelText?: string;
  forceUpgrade?: boolean;
};

type VersionSpecificOptions = {
  localVersion: string;
} & PromptUserOptions;

type PerformCheck = {
  updateIsAvailable: boolean;
  latestInfo: ITunesResponse;
}

declare const siren: {
  promptUser: (defaultOptions: PromptUserOptions = {}, versionSpecificOptions: VersionSpecificOptions[] = []) => void;
  performCheck: () => Promise<PerformCheck>;
}

export default siren;
