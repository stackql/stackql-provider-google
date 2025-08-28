--- 
title: places
hide_title: false
hide_table_of_contents: false
keywords:
  - places
  - places
  - google
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage google resources using SQL
custom_edit_url: null
image: /img/stackql-google-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>places</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>places</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.places.places" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Successful response

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a place.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>This Place's resource name, in `places/&#123;place_id&#125;` format. Can be used to look up the Place.</td>
</tr>
<tr>
    <td><CopyableCode code="accessibilityOptions" /></td>
    <td><code>object</code></td>
    <td>Information about the accessibility options a place offers. (id: GoogleMapsPlacesV1PlaceAccessibilityOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="addressComponents" /></td>
    <td><code>array</code></td>
    <td>Repeated components for each locality level. Note the following facts about the address_components[] array: - The array of address components may contain more components than the formatted_address. - The array does not necessarily include all the political entities that contain an address, apart from those included in the formatted_address. To retrieve all the political entities that contain a specific address, you should use reverse geocoding, passing the latitude/longitude of the address as a parameter to the request. - The format of the response is not guaranteed to remain the same between requests. In particular, the number of address_components varies based on the address requested and can change over time for the same address. A component can change position in the array. The type of the component can change. A particular component may be missing in a later response.</td>
</tr>
<tr>
    <td><CopyableCode code="addressDescriptor" /></td>
    <td><code>object</code></td>
    <td>The address descriptor of the place. Address descriptors include additional information that help describe a location using landmarks and areas. See address descriptor regional coverage in https://developers.google.com/maps/documentation/geocoding/address-descriptors/coverage. (id: GoogleMapsPlacesV1AddressDescriptor)</td>
</tr>
<tr>
    <td><CopyableCode code="adrFormatAddress" /></td>
    <td><code>string</code></td>
    <td>The place's address in adr microformat: http://microformats.org/wiki/adr.</td>
</tr>
<tr>
    <td><CopyableCode code="allowsDogs" /></td>
    <td><code>boolean</code></td>
    <td>Place allows dogs.</td>
</tr>
<tr>
    <td><CopyableCode code="attributions" /></td>
    <td><code>array</code></td>
    <td>A set of data provider that must be shown with this result.</td>
</tr>
<tr>
    <td><CopyableCode code="businessStatus" /></td>
    <td><code>string</code></td>
    <td>The business status for the place.</td>
</tr>
<tr>
    <td><CopyableCode code="containingPlaces" /></td>
    <td><code>array</code></td>
    <td>List of places in which the current place is located.</td>
</tr>
<tr>
    <td><CopyableCode code="curbsidePickup" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the business supports curbside pickup.</td>
</tr>
<tr>
    <td><CopyableCode code="currentOpeningHours" /></td>
    <td><code>object</code></td>
    <td>The hours of operation for the next seven days (including today). The time period starts at midnight on the date of the request and ends at 11:59 pm six days later. This field includes the special_days subfield of all hours, set for dates that have exceptional hours. (id: GoogleMapsPlacesV1PlaceOpeningHours)</td>
</tr>
<tr>
    <td><CopyableCode code="currentSecondaryOpeningHours" /></td>
    <td><code>array</code></td>
    <td>Contains an array of entries for the next seven days including information about secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE_THROUGH, PICKUP, or TAKEOUT) based on the types of the place. This field includes the special_days subfield of all hours, set for dates that have exceptional hours.</td>
</tr>
<tr>
    <td><CopyableCode code="delivery" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the business supports delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="dineIn" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the business supports indoor or outdoor seating options.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>object</code></td>
    <td>The localized name of the place, suitable as a short human-readable description. For example, "Google Sydney", "Starbucks", "Pyrmont", etc. (id: GoogleTypeLocalizedText)</td>
</tr>
<tr>
    <td><CopyableCode code="editorialSummary" /></td>
    <td><code>object</code></td>
    <td>Contains a summary of the place. A summary is comprised of a textual overview, and also includes the language code for these if applicable. Summary text must be presented as-is and can not be modified or altered. (id: GoogleTypeLocalizedText)</td>
</tr>
<tr>
    <td><CopyableCode code="evChargeAmenitySummary" /></td>
    <td><code>object</code></td>
    <td>The summary of amenities near the EV charging station. (id: GoogleMapsPlacesV1PlaceEvChargeAmenitySummary)</td>
</tr>
<tr>
    <td><CopyableCode code="evChargeOptions" /></td>
    <td><code>object</code></td>
    <td>Information of ev charging options. (id: GoogleMapsPlacesV1EVChargeOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="formattedAddress" /></td>
    <td><code>string</code></td>
    <td>A full, human-readable address for this place.</td>
</tr>
<tr>
    <td><CopyableCode code="fuelOptions" /></td>
    <td><code>object</code></td>
    <td>The most recent information about fuel options in a gas station. This information is updated regularly. (id: GoogleMapsPlacesV1FuelOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="generativeSummary" /></td>
    <td><code>object</code></td>
    <td>AI-generated summary of the place. (id: GoogleMapsPlacesV1PlaceGenerativeSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="goodForChildren" /></td>
    <td><code>boolean</code></td>
    <td>Place is good for children.</td>
</tr>
<tr>
    <td><CopyableCode code="goodForGroups" /></td>
    <td><code>boolean</code></td>
    <td>Place accommodates groups.</td>
</tr>
<tr>
    <td><CopyableCode code="goodForWatchingSports" /></td>
    <td><code>boolean</code></td>
    <td>Place is suitable for watching sports.</td>
</tr>
<tr>
    <td><CopyableCode code="googleMapsLinks" /></td>
    <td><code>object</code></td>
    <td>Links to trigger different Google Maps actions. (id: GoogleMapsPlacesV1PlaceGoogleMapsLinks)</td>
</tr>
<tr>
    <td><CopyableCode code="googleMapsUri" /></td>
    <td><code>string</code></td>
    <td>A URL providing more information about this place.</td>
</tr>
<tr>
    <td><CopyableCode code="iconBackgroundColor" /></td>
    <td><code>string</code></td>
    <td>Background color for icon_mask in hex format, e.g. #909CE1.</td>
</tr>
<tr>
    <td><CopyableCode code="iconMaskBaseUri" /></td>
    <td><code>string</code></td>
    <td>A truncated URL to an icon mask. User can access different icon type by appending type suffix to the end (eg, ".svg" or ".png").</td>
</tr>
<tr>
    <td><CopyableCode code="internationalPhoneNumber" /></td>
    <td><code>string</code></td>
    <td>A human-readable phone number for the place, in international format.</td>
</tr>
<tr>
    <td><CopyableCode code="liveMusic" /></td>
    <td><code>boolean</code></td>
    <td>Place provides live music.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>The position of this place. (id: GoogleTypeLatLng)</td>
</tr>
<tr>
    <td><CopyableCode code="menuForChildren" /></td>
    <td><code>boolean</code></td>
    <td>Place has a children's menu.</td>
</tr>
<tr>
    <td><CopyableCode code="nationalPhoneNumber" /></td>
    <td><code>string</code></td>
    <td>A human-readable phone number for the place, in national format.</td>
</tr>
<tr>
    <td><CopyableCode code="neighborhoodSummary" /></td>
    <td><code>object</code></td>
    <td>A summary of points of interest near the place. (id: GoogleMapsPlacesV1PlaceNeighborhoodSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="outdoorSeating" /></td>
    <td><code>boolean</code></td>
    <td>Place provides outdoor seating.</td>
</tr>
<tr>
    <td><CopyableCode code="parkingOptions" /></td>
    <td><code>object</code></td>
    <td>Options of parking provided by the place. (id: GoogleMapsPlacesV1PlaceParkingOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="paymentOptions" /></td>
    <td><code>object</code></td>
    <td>Payment options the place accepts. If a payment option data is not available, the payment option field will be unset. (id: GoogleMapsPlacesV1PlacePaymentOptions)</td>
</tr>
<tr>
    <td><CopyableCode code="photos" /></td>
    <td><code>array</code></td>
    <td>Information (including references) about photos of this place. A maximum of 10 photos can be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="plusCode" /></td>
    <td><code>object</code></td>
    <td>Plus code of the place location lat/long. (id: GoogleMapsPlacesV1PlacePlusCode)</td>
</tr>
<tr>
    <td><CopyableCode code="postalAddress" /></td>
    <td><code>object</code></td>
    <td>The address in postal address format. (id: GoogleTypePostalAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="priceLevel" /></td>
    <td><code>string</code></td>
    <td>Price level of the place.</td>
</tr>
<tr>
    <td><CopyableCode code="priceRange" /></td>
    <td><code>object</code></td>
    <td>The price range associated with a Place. (id: GoogleMapsPlacesV1PriceRange)</td>
</tr>
<tr>
    <td><CopyableCode code="primaryType" /></td>
    <td><code>string</code></td>
    <td>The primary type of the given result. This type must be one of the Places API supported types. For example, "restaurant", "cafe", "airport", etc. A place can only have a single primary type. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types. The primary type may be missing if the place's primary type is not a supported type. When a primary type is present, it is always one of the types in the `types` field.</td>
</tr>
<tr>
    <td><CopyableCode code="primaryTypeDisplayName" /></td>
    <td><code>object</code></td>
    <td>The display name of the primary type, localized to the request language if applicable. For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types. The primary type may be missing if the place's primary type is not a supported type. (id: GoogleTypeLocalizedText)</td>
</tr>
<tr>
    <td><CopyableCode code="pureServiceAreaBusiness" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the place is a pure service area business. Pure service area business is a business that visits or delivers to customers directly but does not serve customers at their business address. For example, businesses like cleaning services or plumbers. Those businesses may not have a physical address or location on Google Maps.</td>
</tr>
<tr>
    <td><CopyableCode code="rating" /></td>
    <td><code>number (double)</code></td>
    <td>A rating between 1.0 and 5.0, based on user reviews of this place.</td>
</tr>
<tr>
    <td><CopyableCode code="regularOpeningHours" /></td>
    <td><code>object</code></td>
    <td>The regular hours of operation. Note that if a place is always open (24 hours), the `close` field will not be set. Clients can rely on always open (24 hours) being represented as an [`open`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Period) period containing [`day`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Point) with value `0`, [`hour`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Point) with value `0`, and [`minute`](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places#Point) with value `0`. (id: GoogleMapsPlacesV1PlaceOpeningHours)</td>
</tr>
<tr>
    <td><CopyableCode code="regularSecondaryOpeningHours" /></td>
    <td><code>array</code></td>
    <td>Contains an array of entries for information about regular secondary hours of a business. Secondary hours are different from a business's main hours. For example, a restaurant can specify drive through hours or delivery hours as its secondary hours. This field populates the type subfield, which draws from a predefined list of opening hours types (such as DRIVE_THROUGH, PICKUP, or TAKEOUT) based on the types of the place.</td>
</tr>
<tr>
    <td><CopyableCode code="reservable" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the place supports reservations.</td>
</tr>
<tr>
    <td><CopyableCode code="restroom" /></td>
    <td><code>boolean</code></td>
    <td>Place has restroom.</td>
</tr>
<tr>
    <td><CopyableCode code="reviewSummary" /></td>
    <td><code>object</code></td>
    <td>AI-generated summary of the place using user reviews. (id: GoogleMapsPlacesV1PlaceReviewSummary)</td>
</tr>
<tr>
    <td><CopyableCode code="reviews" /></td>
    <td><code>array</code></td>
    <td>List of reviews about this place, sorted by relevance. A maximum of 5 reviews can be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="servesBeer" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the place serves beer.</td>
</tr>
<tr>
    <td><CopyableCode code="servesBreakfast" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the place serves breakfast.</td>
</tr>
<tr>
    <td><CopyableCode code="servesBrunch" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the place serves brunch.</td>
</tr>
<tr>
    <td><CopyableCode code="servesCocktails" /></td>
    <td><code>boolean</code></td>
    <td>Place serves cocktails.</td>
</tr>
<tr>
    <td><CopyableCode code="servesCoffee" /></td>
    <td><code>boolean</code></td>
    <td>Place serves coffee.</td>
</tr>
<tr>
    <td><CopyableCode code="servesDessert" /></td>
    <td><code>boolean</code></td>
    <td>Place serves dessert.</td>
</tr>
<tr>
    <td><CopyableCode code="servesDinner" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the place serves dinner.</td>
</tr>
<tr>
    <td><CopyableCode code="servesLunch" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the place serves lunch.</td>
</tr>
<tr>
    <td><CopyableCode code="servesVegetarianFood" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the place serves vegetarian food.</td>
</tr>
<tr>
    <td><CopyableCode code="servesWine" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the place serves wine.</td>
</tr>
<tr>
    <td><CopyableCode code="shortFormattedAddress" /></td>
    <td><code>string</code></td>
    <td>A short, human-readable address for this place.</td>
</tr>
<tr>
    <td><CopyableCode code="subDestinations" /></td>
    <td><code>array</code></td>
    <td>A list of sub-destinations related to the place.</td>
</tr>
<tr>
    <td><CopyableCode code="takeout" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the business supports takeout.</td>
</tr>
<tr>
    <td><CopyableCode code="timeZone" /></td>
    <td><code>object</code></td>
    <td>IANA Time Zone Database time zone. For example "America/New_York". (id: GoogleTypeTimeZone)</td>
</tr>
<tr>
    <td><CopyableCode code="types" /></td>
    <td><code>array</code></td>
    <td>A set of type tags for this result. For example, "political" and "locality". For the complete list of possible values, see Table A and Table B at https://developers.google.com/maps/documentation/places/web-service/place-types</td>
</tr>
<tr>
    <td><CopyableCode code="userRatingCount" /></td>
    <td><code>integer (int32)</code></td>
    <td>The total number of reviews (with or without text) for this place.</td>
</tr>
<tr>
    <td><CopyableCode code="utcOffsetMinutes" /></td>
    <td><code>integer (int32)</code></td>
    <td>Number of minutes this place's timezone is currently offset from UTC. This is expressed in minutes to support timezones that are offset by fractions of an hour, e.g. X hours and 15 minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="viewport" /></td>
    <td><code>object</code></td>
    <td>A viewport suitable for displaying the place on an average-sized map. This viewport should not be used as the physical boundary or the service area of the business. (id: GoogleGeoTypeViewport)</td>
</tr>
<tr>
    <td><CopyableCode code="websiteUri" /></td>
    <td><code>string</code></td>
    <td>The authoritative website for this place, e.g. a business' homepage. Note that for places that are part of a chain (e.g. an IKEA store), this will usually be the website for the individual store, not the overall chain.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-placesId"><code>placesId</code></a></td>
    <td><a href="#parameter-languageCode"><code>languageCode</code></a>, <a href="#parameter-regionCode"><code>regionCode</code></a>, <a href="#parameter-sessionToken"><code>sessionToken</code></a></td>
    <td>Get the details of a place based on its resource name, which is a string in the `places/&#123;place_id&#125;` format.</td>
</tr>
<tr>
    <td><a href="#search_nearby"><CopyableCode code="search_nearby" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Search for places near locations.</td>
</tr>
<tr>
    <td><a href="#search_text"><CopyableCode code="search_text" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Text query based place search.</td>
</tr>
<tr>
    <td><a href="#autocomplete"><CopyableCode code="autocomplete" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Returns predictions for the given input.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-placesId">
    <td><CopyableCode code="placesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-languageCode">
    <td><CopyableCode code="languageCode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-regionCode">
    <td><CopyableCode code="regionCode" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-sessionToken">
    <td><CopyableCode code="sessionToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get the details of a place based on its resource name, which is a string in the `places/&#123;place_id&#125;` format.

```sql
SELECT
id,
name,
accessibilityOptions,
addressComponents,
addressDescriptor,
adrFormatAddress,
allowsDogs,
attributions,
businessStatus,
containingPlaces,
curbsidePickup,
currentOpeningHours,
currentSecondaryOpeningHours,
delivery,
dineIn,
displayName,
editorialSummary,
evChargeAmenitySummary,
evChargeOptions,
formattedAddress,
fuelOptions,
generativeSummary,
goodForChildren,
goodForGroups,
goodForWatchingSports,
googleMapsLinks,
googleMapsUri,
iconBackgroundColor,
iconMaskBaseUri,
internationalPhoneNumber,
liveMusic,
location,
menuForChildren,
nationalPhoneNumber,
neighborhoodSummary,
outdoorSeating,
parkingOptions,
paymentOptions,
photos,
plusCode,
postalAddress,
priceLevel,
priceRange,
primaryType,
primaryTypeDisplayName,
pureServiceAreaBusiness,
rating,
regularOpeningHours,
regularSecondaryOpeningHours,
reservable,
restroom,
reviewSummary,
reviews,
servesBeer,
servesBreakfast,
servesBrunch,
servesCocktails,
servesCoffee,
servesDessert,
servesDinner,
servesLunch,
servesVegetarianFood,
servesWine,
shortFormattedAddress,
subDestinations,
takeout,
timeZone,
types,
userRatingCount,
utcOffsetMinutes,
viewport,
websiteUri
FROM google.places.places
WHERE placesId = '{{ placesId }}' -- required
AND languageCode = '{{ languageCode }}'
AND regionCode = '{{ regionCode }}'
AND sessionToken = '{{ sessionToken }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="search_nearby"
    values={[
        { label: 'search_nearby', value: 'search_nearby' },
        { label: 'search_text', value: 'search_text' },
        { label: 'autocomplete', value: 'autocomplete' }
    ]}
>
<TabItem value="search_nearby">

Search for places near locations.

```sql
EXEC google.places.places.search_nearby 
@@json=
'{
"languageCode": "{{ languageCode }}", 
"regionCode": "{{ regionCode }}", 
"includedTypes": "{{ includedTypes }}", 
"excludedTypes": "{{ excludedTypes }}", 
"includedPrimaryTypes": "{{ includedPrimaryTypes }}", 
"excludedPrimaryTypes": "{{ excludedPrimaryTypes }}", 
"maxResultCount": {{ maxResultCount }}, 
"locationRestriction": "{{ locationRestriction }}", 
"rankPreference": "{{ rankPreference }}", 
"routingParameters": "{{ routingParameters }}"
}';
```
</TabItem>
<TabItem value="search_text">

Text query based place search.

```sql
EXEC google.places.places.search_text 
@@json=
'{
"textQuery": "{{ textQuery }}", 
"languageCode": "{{ languageCode }}", 
"regionCode": "{{ regionCode }}", 
"rankPreference": "{{ rankPreference }}", 
"includedType": "{{ includedType }}", 
"openNow": {{ openNow }}, 
"minRating": {{ minRating }}, 
"maxResultCount": {{ maxResultCount }}, 
"pageSize": {{ pageSize }}, 
"pageToken": "{{ pageToken }}", 
"priceLevels": "{{ priceLevels }}", 
"strictTypeFiltering": {{ strictTypeFiltering }}, 
"locationBias": "{{ locationBias }}", 
"locationRestriction": "{{ locationRestriction }}", 
"evOptions": "{{ evOptions }}", 
"routingParameters": "{{ routingParameters }}", 
"searchAlongRouteParameters": "{{ searchAlongRouteParameters }}", 
"includePureServiceAreaBusinesses": {{ includePureServiceAreaBusinesses }}
}';
```
</TabItem>
<TabItem value="autocomplete">

Returns predictions for the given input.

```sql
EXEC google.places.places.autocomplete 
@@json=
'{
"input": "{{ input }}", 
"locationBias": "{{ locationBias }}", 
"locationRestriction": "{{ locationRestriction }}", 
"includedPrimaryTypes": "{{ includedPrimaryTypes }}", 
"includedRegionCodes": "{{ includedRegionCodes }}", 
"languageCode": "{{ languageCode }}", 
"regionCode": "{{ regionCode }}", 
"origin": "{{ origin }}", 
"inputOffset": {{ inputOffset }}, 
"includeQueryPredictions": {{ includeQueryPredictions }}, 
"sessionToken": "{{ sessionToken }}", 
"includePureServiceAreaBusinesses": {{ includePureServiceAreaBusinesses }}
}';
```
</TabItem>
</Tabs>
