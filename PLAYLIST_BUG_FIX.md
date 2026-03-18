# Private Playlist Creation Bug Fix

## Summary

Fixed the bug where users were unable to create playlists on Audius. The playlists would appear to be creating but never complete, just sitting there trying to load album art, and would disappear with a 404 error on refresh.

## Root Cause

The bug was caused by an incorrect default value in the collection metadata schema:

1. **Schema Default Issue**: The `collectionMetadataSchema` had `is_private: true` as the default value, causing all new playlists to be created as private/hidden by default.

2. **Hardcoded Values**: Both `createPlaylistSaga.ts` and `createAlbumSaga.ts` had hardcoded `is_private = true` in their optimistic save functions, overriding any user preference.

3. **Mismatch Between Intent and Behavior**: When users created playlists through the UI without explicitly setting visibility, the playlists were unintentionally created as private, which has different visibility and persistence behavior than public playlists.

## Changes Made

### 1. Fixed Schema Default
**File**: `audius-protocol/packages/common/src/schemas/metadata.ts`
- Changed `is_private: true` to `is_private: false` (line 103)

### 2. Removed Hardcoded Playlist Privacy
**File**: `audius-protocol/packages/web/src/common/store/cache/collections/createPlaylistSaga.ts`
- Removed hardcoded `playlist.is_private = true` from `optimisticallySavePlaylist` function (previously line 121)
- Now respects the `is_private` value from `formFields`

### 3. Removed Hardcoded Album Privacy
**File**: `audius-protocol/packages/web/src/common/store/cache/collections/createAlbumSaga.ts`
- Removed hardcoded `album.is_private = true` from `optimisticallySaveAlbum` function (previously line 107)
- Now respects the `is_private` value from `formFields`

## Why This Fixes the Bug

1. **Correct Default Behavior**: Playlists now default to public (`is_private: false`), which matches the expected behavior for most playlist creation flows.

2. **Respects User Choice**: Users can still create private playlists through the UI's `VisibilityField` component, which allows them to choose between:
   - Public (default)
   - Hidden (private)
   - Scheduled Release (for albums/tracks)

3. **Consistent State**: The optimistic UI state now matches the actual state sent to the backend API, preventing the mismatch that caused playlists to appear to be creating but never completing.

## How to Apply This Fix

The fix has been committed to the `fix/private-playlist-creation-bug` branch in the audius-protocol repository.

A patch file is also available at: `/workspace/0001-Fix-private-playlist-creation-bug.patch`

To apply the patch to the audius-protocol repository:

```bash
cd /path/to/audius-protocol
git apply /workspace/0001-Fix-private-playlist-creation-bug.patch
```

## Testing Recommendations

1. **Create a playlist from the library page** - Should create successfully and appear immediately
2. **Create a playlist from a track** - Should create with the track included
3. **Create a hidden playlist** - Use the visibility field to set it as hidden, should work correctly
4. **Create an album** - Should create with public visibility by default
5. **Refresh after creating** - Playlist should persist and not 404

## Related Files

- `packages/web/src/components/edit/fields/visibility/VisibilityField.tsx` - UI component for setting playlist/album visibility
- `packages/web/src/pages/upload-page/forms/UploadCollectionForm.tsx` - Upload form that explicitly sets `is_private: false`
- `packages/common/src/adapters/collection.ts` - Adapter that converts collection metadata for SDK calls (line 182: `isPrivate: input.is_private ?? false`)
- `packages/discovery-provider/src/queries/get_playlists.py` - Backend query that filters private playlists for non-owners
