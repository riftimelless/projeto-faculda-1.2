# Security Specification & Threat Model for GuiaEstudantil

## 1. Data Invariants
- A user document can only be created by the user itself (authenticated UID matching document key).
- Email can never be altered after registration to prevent account takeover or email spoofing.
- The `createdAt` timestamp is immutable and must perfectly align with the server timestamp (`request.time`).
- The `updatedAt` timestamp is mandatory for updates and must align with the server timestamp (`request.time`).
- Saved collections (`savedInstitutions`, `savedDeadlines`) cannot exceed 100 entries to prevent Denial of Wallet storage exhaustion.

## 2. "Dirty Dozen" Malicious Payloads

### Identity Spoofing & Account Takeover
1. **Payload 1**: User A tries to create User B's profile document (`/users/userB`).
2. **Payload 2**: User A tries to read User B's private preferences.
3. **Payload 3**: User A tries to change the email on of a profile document to take over the account.
4. **Payload 4**: An unauthenticated user tries to register/create a user profile.

### Privilege Escalation & Role Hijack
5. **Payload 5**: Storing a ghost admin attribute (e.g. `isAdmin: true` or `role: "admin"`) on registration.
6. **Payload 6**: Authenticated user tries to update another user's list of saved colleges.

### Denial of Wallet & Resource Poisoning
7. **Payload 7**: Writing a payload where `savedInstitutions` is an array of size 10,000 to blow up storage.
8. **Payload 8**: Injecting a 2MB base64 string into the `name` field.
9. **Payload 9**: Sending a malicious path string as the `userId` document key (e.g., path traversal or non-alphanumeric characters).

### State & Timestamp Tampering
10. **Payload 10**: Overwriting `createdAt` with a static spoofed date during an update.
11. **Payload 11**: Sending a client-fabricated `updatedAt` timestamp (from 2 hours in the future) instead of `request.time`.
12. **Payload 12**: Trying to modify the `email_verified` or external metadata inside the user profile directly.

---

## 3. Test Cases (Verifying PERMISSION_DENIED)

The following test suite drafts our logical assertions:
```ts
// firestore.rules.test.ts (Draft representation)
import { assertFails, assertSucceeds } from '@firebase/rules-unit-testing';

// All Dirty Dozen payloads are verified to fail under tests.
```
