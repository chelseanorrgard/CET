**Assignment I (Project Plan and QFD)**

**QFD Categorization of Project Application Requirements**

1.  **_Stakeholders_**

*   **Customer** (Hotel guests using the app to book rooms)
*   **Administrator** (Hotel management overseeing room and reservation data)
*   **Receptionist** (Hotel staff managing day-to-day reservations and room status)
*   **System** (Core application infrastructure, security, and performance)

2.  **_Customer Requirements_**

| Customer Requirements | System Implementation | Priority |
| --- | --- | --- |
| View Available Rooms: Customers should be able to browse available rooms. | A user-friendly front-end interface that pulls available room data from the database. | High |
| Search Rooms: Customers need to search for rooms based on specific filters (e.g., room type, price, availability). | Backend queries linked to filters (price, type, dates) that fetch filtered data from the database. | High |
| Make a Reservation: Customers should be able to reserve rooms. | Reservation module, syncing selected room data with user profiles and storing it in the database. | High |
| Manage Reservations: Customers should be able to view, edit, and cancel their reservations. | Interface for managing reservations, with options to update or cancel, linked to database updates. | High |

3.  **_Administrator Requirements_**

| Administrator Requirements | System Implementation | Priority |
| --- | --- | --- |
| Add Room Data: Administrators must be able to add new room details. | Admin panel with forms for adding rooms, connected to the database to store room information. | High |
| View Room Data: Administrators should view current room data. | Display room data through an admin dashboard, fetching details from the database. | High |
| Update Room Data: Administrators should update existing room data. | Admin dashboard functionality to edit and update room details in the database. | Medium |
| Delete Room Data: Administrators should delete room data when necessary. | Functionality for deleting room entries in the database, ensuring confirmation prompts to avoid accidental deletion. | Low |

4.  **_Receptionist Requirements_**

| Receptionist Requirements | System Implementation | Priority |
| --- | --- | --- |
| View Reservations: Receptionists should see all customer reservations. | Admin panel with forms for adding rooms, connected to the database to store room information. | High |
| Modify Reservations: Receptionists should be able to edit or update reservation details. | Admin functionality to update reservation data in the database via the front-end. | High |
| Check-in/Check-out Management: Receptionists need the ability to manage check-ins and check-outs. | Build functionality to update room status (available, occupied, etc.) in real-time. | Medium |

5.  **_System Requirements_**

| System Requirements | System Implementation | Priority |
| --- | --- | --- |
| Data Persistence: Data should be stored securely and consistently. | Use MongoDB as the backend database to store all room, user, and reservation data. | High |
| User Authentication: The system must offer secure login for customers, receptionists, and administrators. | Implement secure authentication using JWT, with encrypted password storage. | High |
| Role-based Access Control: Administrators, receptionists, and customers should have different access levels. | Use access control mechanisms to distinguish user roles and restrict certain actions. | Medium |

6.  **_QFD Matrix for the Hotel Room Reservation Application_**

| Customer Requirements | Ease of Use | Performance (Speed) | Security | Scalability | Data Integrity |
| --- | --- | --- | --- | --- | --- | 
| View Available Rooms | ++ | + | - | + | + |
| Search Rooms | ++ | ++ | + | + | ++ |
| Make a Reservation | ++ | ++ | ++ | + | ++ |
| Manage Reservations | ++ | + | ++ | + | ++ |
| Add Room Data | + | + | + | ++ | ++ |
| Modify Room Data | + | + | + | ++ | ++ |
| View Reservations | ++ | + | + | + | ++ |
| Check-in/Check-out Management | ++ | + | ++ | + | ++ |
| Authentication for Users | + | + | ++ | + | ++ |
| Handle Data Persistence | + | + | ++ | ++ | ++ |

++ is Strong

\+ is Medium

\- is Weak