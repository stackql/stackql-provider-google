--- 
title: books
hide_title: false
hide_table_of_contents: false
keywords:
  - books
  - libraryagent
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

Creates, updates, deletes, gets or lists a <code>books</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><code>books</code></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="google.libraryagent.books" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

A single book in the library.

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The resource name of the book. Book names have the form `shelves/&#123;shelf_id&#125;/books/&#123;book_id&#125;`. The name is ignored when creating a book.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>The name of the book author.</td>
</tr>
<tr>
    <td><CopyableCode code="read" /></td>
    <td><code>boolean</code></td>
    <td>Value indicating whether the book has been read.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of the book.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response message for LibraryAgent.ListBooks.

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
    <td><CopyableCode code="books" /></td>
    <td><code>array</code></td>
    <td>The list of books.</td>
</tr>
<tr>
    <td><CopyableCode code="nextPageToken" /></td>
    <td><code>string</code></td>
    <td>A token to retrieve next page of results. Pass this value in the ListBooksRequest.page_token field in the subsequent call to `ListBooks` method to retrieve the next page of results.</td>
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
    <td><a href="#parameter-shelvesId"><code>shelvesId</code></a>, <a href="#parameter-booksId"><code>booksId</code></a></td>
    <td></td>
    <td>Gets a book. Returns NOT_FOUND if the book does not exist.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-shelvesId"><code>shelvesId</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-pageToken"><code>pageToken</code></a></td>
    <td>Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.</td>
</tr>
<tr>
    <td><a href="#borrow"><CopyableCode code="borrow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-shelvesId"><code>shelvesId</code></a>, <a href="#parameter-booksId"><code>booksId</code></a></td>
    <td></td>
    <td>Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.</td>
</tr>
<tr>
    <td><a href="#return"><CopyableCode code="return" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-shelvesId"><code>shelvesId</code></a>, <a href="#parameter-booksId"><code>booksId</code></a></td>
    <td></td>
    <td>Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.</td>
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
<tr id="parameter-booksId">
    <td><CopyableCode code="booksId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-shelvesId">
    <td><CopyableCode code="shelvesId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer (int32)</code></td>
    <td></td>
</tr>
<tr id="parameter-pageToken">
    <td><CopyableCode code="pageToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets a book. Returns NOT_FOUND if the book does not exist.

```sql
SELECT
name,
author,
read,
title
FROM google.libraryagent.books
WHERE shelvesId = '{{ shelvesId }}' -- required
AND booksId = '{{ booksId }}' -- required;
```
</TabItem>
<TabItem value="list">

Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.

```sql
SELECT
books,
nextPageToken
FROM google.libraryagent.books
WHERE shelvesId = '{{ shelvesId }}' -- required
AND pageSize = '{{ pageSize }}'
AND pageToken = '{{ pageToken }}';
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="borrow"
    values={[
        { label: 'borrow', value: 'borrow' },
        { label: 'return', value: 'return' }
    ]}
>
<TabItem value="borrow">

Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.

```sql
EXEC google.libraryagent.books.borrow 
@shelvesId='{{ shelvesId }}' --required, 
@booksId='{{ booksId }}' --required;
```
</TabItem>
<TabItem value="return">

Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.

```sql
EXEC google.libraryagent.books.return 
@shelvesId='{{ shelvesId }}' --required, 
@booksId='{{ booksId }}' --required;
```
</TabItem>
</Tabs>
