// jest.config.js
module.exports = {
  collectCoverageFrom: ["pages/*.{ts,tsx,js,jsx}", "!pages/_app.tsx", "components/*.{ts,tsx,js,jsx}","!**/*.d.ts", "!**/node_modules/**"],
  // we need to create this file
  setupFilesAfterEnv: ["<rootDir>/__tests__/setupTests.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/" ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx|css|scss)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
  testMatch: ["**/test/**/*.{ts,tsx,js,jsx}","**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
	  "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@styles(.*)$": "<rootDir>/styles$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  },
};