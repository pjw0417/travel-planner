# The City Edit — New York travel planner

A static personal travel planner for GitHub Pages. It includes the December 31, 2026–January 5, 2027 itinerary, hotel and stop distances, Google Maps links, visit checkboxes, editable photos, English/Korean display, and separate saved trips.

## Publish on GitHub Pages

1. Push these files to a GitHub repository.
2. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
3. Open the Pages URL shown by GitHub.

No build step or server is needed.

## Using the planner

- Use the **English / 한국어** button to switch languages. The supplied itinerary has Korean translations; new or custom text appears in the language in which you entered it until you edit its other-language version.
- Use **New trip** for a blank itinerary or **Copy trip** to reuse the current plan with visit checkboxes reset. Choose a trip from the dropdown to switch between visits.
- Choose a day to view its stops. Use the pencil icons to edit trip details or a stop.
- Use **Edit day** to change a day’s title, description, and tips. Use **Add a stop** for new places and check the circle after visiting.
- Add a photo URL or upload an image under 2 MB. Images uploaded this way stay in browser storage.
- Distances are approximate straight-line miles from the hotel and previous stop. Add latitude and longitude to new stops for estimates. **Walking route** opens Google Maps for actual directions.
- All trips are saved in this browser with `localStorage`. **Export backup** includes every trip, and **Import backup** restores them on another device or browser. Existing single-trip browser data is migrated automatically. Browser storage can be cleared, so keep a backup.
- The itinerary and coordinates are starting estimates. Confirm operating hours, reservations, entry rules, and travel times before the trip.
