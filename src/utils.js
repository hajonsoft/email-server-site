export function getCleanHostname() {
    // 1. Get the Current Hostname:
    const hostname = window.location.hostname;

    // 2. Remove the TLD (Top-Level Domain):
    // This regex matches the last '.' followed by a sequence of characters
    // (like .com, .net, .org, .co.uk, etc.) until the end of the string.
    const cleanedHostname = hostname.replace(/\.[^.]+$/, '');

    // 3. Return the Cleaned Hostname
    // Capitalize the first letter of the cleaned hostname
    return cleanedHostname.charAt(0).toUpperCase() + cleanedHostname.slice(1);
}
